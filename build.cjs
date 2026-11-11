const fs = require("node:fs");
const path = require("node:path");
const d3 = require("./vendor/d3.min.js");
const topojson = require("./vendor/topojson-client.min.js");
const { events, connections } = require("./src/reference-atlas-events.cjs");

const width = 600;
const height = 475;
const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, "data", name), "utf8"));
const world = read("countries-50m.json");
const land = topojson.feature(world, world.objects.land);
const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
const china = read("china-provinces.geojson");

// GeoJSON rings from DataV use mixed winding. D3 uses clockwise exterior rings.
for (const feature of china.features) {
  const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  for (const polygon of polygons) {
    for (const [index, ring] of polygon.entries()) {
      const area = d3.polygonArea(ring);
      if ((index === 0 && area < 0) || (index > 0 && area > 0)) ring.reverse();
    }
  }
}
const provinceFeatures = china.features.filter(feature => feature.properties.name);
const mainlandExtent = {
  type: "MultiPoint",
  coordinates: provinceFeatures.flatMap(feature => feature.geometry.coordinates
    .flat(feature.geometry.type === "Polygon" ? 1 : 2)
    .filter(([, latitude]) => latitude >= 17))
};
const mainLabels = new Set(["新疆", "西藏", "内蒙古", "黑龙江", "甘肃", "陕西", "四川", "广东", "福建", "山东", "江苏", "湖北", "台湾"]);
const provinceName = name => name.replace(/(壮族|回族|维吾尔)?自治区$|特别行政区$|[省市]$/g, "");

const chinaProjection = d3.geoConicConformal()
  .parallels([25, 47]).rotate([-105, 0]).center([0, 36])
  .fitExtent([[16, 23], [568, 443]], mainlandExtent)
  .clipExtent([[0, 0], [width, height]]);
const europeProjection = d3.geoConicConformal()
  .parallels([40, 58]).rotate([-16, 0]).center([0, 51])
  .scale(530).translate([300, 236])
  .clipExtent([[0, 0], [width, height]]);

function coordinates(projection, point) {
  const [x, y] = projection(point);
  return [+(x / width * 100).toFixed(3), +(y / height * 100).toFixed(3)];
}

const chinaPath = d3.geoPath(chinaProjection).digits(1);
const europePath = d3.geoPath(europeProjection).digits(1);
const graticule = d3.geoGraticule().step([10, 10]);
const maps = {
  china: {
    land: chinaPath(land), grid: chinaPath(graticule()),
    regions: provinceFeatures.map(feature => ({
      name: provinceName(feature.properties.name), path: chinaPath(feature)
    })),
    extra: chinaPath({ type: "FeatureCollection", features: china.features.filter(feature => !feature.properties.name) }),
    labels: provinceFeatures.filter(feature => feature.properties.centroid).map(({ properties }) => {
      const name = provinceName(properties.name);
      return { name, point: coordinates(chinaProjection, properties.centroid), primary: mainLabels.has(name) };
    }).filter(label => !["香港", "澳门", "天津", "上海", "北京", "宁夏", "海南"].includes(label.name))
  },
  europe: {
    land: europePath(land), grid: europePath(graticule()), borders: europePath(borders),
    labels: [
      ["伦敦", -0.13, 51.51], ["巴黎", 2.35, 48.86], ["柏林", 13.41, 52.52],
      ["维也纳", 16.37, 48.21], ["罗马", 12.48, 41.89], ["莫斯科", 37.62, 55.75]
    ].map(([name, lon, lat]) => ({ name, point: coordinates(europeProjection, [lon, lat]), primary: true }))
  }
};

const payload = events.map(({ coordinates: point, ...event }) => {
  const projection = event.region === "europe" ? europeProjection : chinaProjection;
  const [x, y] = coordinates(projection, point);
  if (x <= 0 || x >= 100 || y <= 0 || y >= 100) throw new Error(`Unprojected event: ${event.id} at ${x},${y}`);
  const [year, month, day] = event.start.split("-").map(Number);
  const elapsed = Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 1);
  const duration = Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1);
  return { ...event, x, y, time: +(year + elapsed / duration).toFixed(4) };
});
const template = fs.readFileSync(path.join(__dirname, "src", "reference-atlas.html"), "utf8");
const shell = fs.readFileSync(path.join(__dirname, "src", "standalone.html"), "utf8");
const fragment = template.replace("__ATLAS_DATA__", () => JSON.stringify({ events: payload, connections, maps })
  .replaceAll("<", "\\u003c"));
const output = shell.replace("<!-- ATLAS -->", () => fragment);
const destination = process.argv[2] ?? path.join(__dirname, "index.html");
fs.writeFileSync(destination, output);
console.log(`Built ${path.basename(destination)}: ${payload.length} events, ${Object.keys(maps).length} maps`);
