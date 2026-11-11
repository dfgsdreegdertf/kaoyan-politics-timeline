const history = require("./history-events.cjs").flatMap(stage => stage.events);

function event(id, name, start, place, coordinates, fact, exam, options = {}) {
  const [year, month, day] = start.split("-").map(Number);
  const date = options.precision === "year" ? "" :
    options.precision === "month" ? `${month}月` : `${month}月${day}日`;
  return {
    id, name, shortName: name, start, year: String(year), date, place, coordinates, fact, exam,
    category: "事件", ...options
  };
}

const modern = [
  event("opium", "鸦片战争爆发", "1840-06-01", "广东珠江口一带", [113.63, 22.40],
    "英军远征舰队抵达中国沿海，鸦片战争爆发。广东珠江口是战争初期的活动海域之一。",
    "中国近代史的开端。", { precision: "month", province: "广东" }),
  event("nanjing", "《南京条约》签订", "1842-08-29", "江苏南京 · 下关江面", [118.73, 32.10],
    "英国迫使清政府签订条约，条款涉及割让香港岛、赔款和开放五处通商口岸。",
    "中国近代史上第一个不平等条约。", { province: "江苏" }),
  event("jintian", "金田起义", "1851-01-11", "广西桂平 · 金田村", [110.08, 23.62],
    "洪秀全率拜上帝会会众在金田起义，建立太平天国。",
    "太平天国运动兴起。", { province: "广西" }),
  event("tianjing", "天京陷落", "1864-07-19", "江苏南京 · 时称天京", [118.80, 32.06],
    "湘军攻入天京，太平天国运动失败。",
    "结合农民阶级的局限性和中外反动势力的镇压分析失败原因。", { province: "江苏" }),
  event("shimonoseki", "《马关条约》签订", "1895-04-17", "日本下关 · 时称马关", [130.94, 33.96],
    "甲午中日战争后，清政府与日本签订不平等条约，涉及割地、赔款和允许日本在通商口岸开设工厂。",
    "中国社会半殖民地化程度进一步加深。"),
  event("reform1898", "戊戌变法", "1898-06-11", "北京", [116.40, 39.91],
    "光绪帝颁布《明定国是诏》，维新派推动政治、经济、教育等改革。",
    "百日维新 · 资产阶级改良运动。", { province: "北京" }),
  event("boxerprotocol", "《辛丑条约》签订", "1901-09-07", "北京", [116.40, 39.91],
    "八国联军侵华战争后，清政府被迫签约，承担赔款并接受列强驻兵等条件。",
    "中国完全陷入半殖民地半封建社会的标志。", { province: "北京" }),
  event("wuchang", "武昌起义", "1911-10-10", "湖北武汉 · 武昌", [114.30, 30.55],
    "革命党人在武昌发动起义，多省随后宣布独立，清朝统治迅速瓦解。",
    "辛亥革命的开端 · 结束延续两千多年的君主专制制度。", { province: "湖北" }),
  event("republic", "中华民国临时政府成立", "1912-01-01", "江苏南京", [118.80, 32.06],
    "孙中山在南京就任中华民国临时大总统，南京临时政府成立。",
    "把武昌起义、南京临时政府成立、清帝退位按时间排序。", { province: "江苏" }),
  event("newdemocracy", "《新民主主义论》发表", "1940-01-01", "陕西延安", [109.49, 36.60],
    "毛泽东系统阐述新民主主义革命的性质、前途以及新民主主义政治、经济和文化。",
    "新民主主义理论的系统化。", { precision: "month", province: "陕西" }),
  event("wto", "中国加入世界贸易组织", "2001-12-11", "北京 · 中国正式成为成员", [116.40, 39.91],
    "多哈部长级会议通过中国加入世贸组织的决定后，中国正式成为世界贸易组织成员。",
    "中国对外开放进入新的阶段。", { province: "北京" })
];

const marx = [
  event("leaguejustice", "正义者同盟成立", "1836-01-01", "法国巴黎", [2.35, 48.86],
    "德国流亡手工业者在巴黎组织正义者同盟。",
    "1847年改组为共产主义者同盟，注意区分两个组织。", { precision: "year" }),
  event("leaguecommunist", "共产主义者同盟成立", "1847-06-01", "英国伦敦", [-0.13, 51.51],
    "正义者同盟第一次代表大会在伦敦举行，决定改组并更名。",
    "马克思和恩格斯参与建立的早期无产阶级政党。", { precision: "month" }),
  event("manifesto", "《共产党宣言》发表", "1848-02-01", "英国伦敦", [-0.13, 51.51],
    "马克思、恩格斯受共产主义者同盟委托起草纲领，德文版在伦敦发表。",
    "马克思主义诞生的标志。", { precision: "month" }),
  event("international1", "第一国际成立", "1864-09-28", "英国伦敦", [-0.13, 51.51],
    "来自多个欧洲国家的工人代表集会，成立国际工人协会。",
    "第一国际全称国际工人协会 · 马克思参与领导。"),
  event("capital", "《资本论》第一卷出版", "1867-09-14", "德国汉堡", [9.99, 53.55],
    "马克思在《资本论》中分析商品、货币与资本，系统阐述剩余价值的生产。",
    "区分劳动力的价值与劳动力使用时创造的价值。"),
  event("commune", "巴黎公社革命爆发", "1871-03-18", "法国巴黎", [2.35, 48.86],
    "巴黎工人和市民起义，随后选举产生巴黎公社。",
    "无产阶级建立政权的早期尝试 · 3月18日是革命爆发。"),
  event("international2", "第二国际成立", "1889-07-01", "法国巴黎", [2.35, 48.86],
    "多国工人政党和组织的代表在巴黎召开国际社会主义工人代表大会。",
    "第二国际在巴黎成立 · 第一国际在伦敦成立。", { precision: "month" }),
  event("engels", "恩格斯逝世", "1895-08-05", "英国伦敦", [-0.13, 51.51],
    "恩格斯晚年整理马克思遗稿，推动《资本论》第二、三卷先后出版。",
    "马克思生前出版第一卷，第二、三卷由恩格斯整理出版。"),
  event("october", "俄国十月革命", "1917-11-07", "俄国彼得格勒（今圣彼得堡）", [30.32, 59.94],
    "布尔什维克领导武装起义，推翻临时政府，建立苏维埃政权。",
    "公历11月7日对应俄历10月25日 · 科学社会主义从理论走向实践。"),
  event("comintern", "共产国际第一次代表大会", "1919-03-02", "俄国莫斯科", [37.62, 55.75],
    "共产主义代表大会在莫斯科召开，成立共产国际。",
    "第三国际即共产国际 · 莫斯科。")
];

const theory = new Set([
  "zunyi", "sixth6", "newdemocracy", "cpc7", "seventh2", "cpc8", "eleventh3",
  "eleventh6", "cpc12", "cpc13", "southern", "cpc14", "cpc15", "cpc16",
  "cpc17", "cpc18", "cpc19", "cpc20"
]);
const provinces = {
  beijing: "北京", shanghai: "上海", guangzhou: "广东", wuhan: "湖北", nanchang: "江西",
  gutian: "福建", zunyi: "贵州", wayaobu: "陕西", huining: "甘肃", xian: "陕西",
  lugou: "北京", luochuan: "陕西", yanan: "陕西", xibaipo: "河北", shenzhen: "广东"
};
const connections = [
  ["opium", "nanjing", "战争与条约"], ["jintian", "tianjing", "兴起与失败"],
  ["wuchang", "republic", "起义与建政"], ["cpc1", "cpc2", "纲领辨析"], ["cpc3", "kmt1", "第一次国共合作"],
  ["august7", "gutian", "土地革命时期"], ["wayaobu", "luochuan", "统一战线与全面抗战"],
  ["sixth6", "newdemocracy", "中国化命题与理论"], ["newdemocracy", "cpc7", "毛泽东思想"],
  ["seventh2", "cppcc1", "筹建新中国"], ["cppcc1", "npc1", "《共同纲领》与宪法"],
  ["seventh3", "eleventh3", "两次三中全会辨析"], ["southern", "cpc14", "经济体制改革"],
  ["cpc17", "cpc18", "科学发展观"], ["cpc19", "cpc20", "新时代"],
  ["leaguejustice", "leaguecommunist", "组织改组"], ["leaguecommunist", "manifesto", "组织与纲领"],
  ["international1", "international2", "国际组织辨析"], ["international2", "comintern", "国际组织辨析"],
  ["capital", "engels", "《资本论》的出版"], ["october", "comintern", "十月革命后"]
];

module.exports = {
  events: [...modern, ...history, ...marx].map(item => ({
    ...item, province: item.province ?? provinces[item.site],
    region: marx.includes(item) ? "europe" : "china",
    topics: marx.includes(item) ? ["marx"] : theory.has(item.id) ? ["history", "theory"] : ["history"]
  })).sort((a, b) => a.start.localeCompare(b.start)),
  connections
};
