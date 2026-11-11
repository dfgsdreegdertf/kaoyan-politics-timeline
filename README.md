# 考研政治可视化时间轴

交互式复习地图，收录 58 个历史事件、会议和理论节点。可切换史纲、毛中特、马原或全部，按年份拖动时间轴，或以不同倍速正放和倒放。事件背景、考点和地点随时间轴更新。

每个节点都有可查读的文献、史料或报道。重点节点附档案图版、旧址照片和纪录片链接。点击事件详情里的「查看资料与影像」，即可跳到当前事件的资料。

[在浏览器打开考研政治可视化时间轴](https://dfgsdreegdertf.github.io/kaoyan-politics-timeline/)

## 离线打开

在 GitHub 打开 [index.html](./index.html)，使用文件页的 **Download raw file** 下载，然后用浏览器打开本地文件。地图、事件和图片缩略图都内嵌在这份 HTML 里，断网也可以查看。查阅外部原文和视频需要联网。

## 编辑和重新生成

- 史纲会议和事件在 [src/history-events.cjs](./src/history-events.cjs)。
- 新增史纲与马原事件、毛中特的选录范围和考点关联在 [src/reference-atlas-events.cjs](./src/reference-atlas-events.cjs)。
- 节点资料链接和阅读提示在 [src/timeline-resources.cjs](./src/timeline-resources.cjs)。图片原页、作者和授权信息在 [data/timeline-photos.json](./data/timeline-photos.json)。
- 页面布局和交互在 [src/reference-atlas.html](./src/reference-atlas.html)。

用 Node.js 运行以下命令重新生成 `index.html`。构建使用仓库里的数据和第三方库，无需联网安装依赖。

```sh
node build.cjs
```

## 资料来源

- 史纲会议与事件参考[《中国共产党一百年大事记》](https://www.mem.gov.cn/xw/ztzl/2021/dsxxjy/xxfd/202106/t20210628_390140.shtml)、[中国政协文史馆的大会会址资料](https://www.cppcc.gov.cn/zxww/2019/04/15/ARTI1555290900784259.shtml)和[教育部历史课程标准](https://www.moe.gov.cn/srcsite/A26/s8001/201112/W020220418401385879509.pdf)。
- 马原早期节点参考[中共上海市委党校资料](https://www.sai.gov.cn/info/2421/100251.htm)和[国际工人协会资料](https://www.hdcdi.gov.cn/new2022/qfsy/ljwh/202211/t20221130_4565545_ql.htm)。
- 中国底图来自 [DataV GeoAtlas](https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json)，采用现行区划。阶段配色表示选录事件的分布，点位为近似位置。欧洲底图来自 [Natural Earth](https://www.naturalearthdata.com/) 和 [World Atlas](https://github.com/topojson/world-atlas)。
- 构建使用 [D3 7.9.0](https://github.com/d3/d3) 和 [TopoJSON Client 3.1.0](https://github.com/topojson/topojson-client)，随附[许可证](./vendor/)。
- 影像以链接形式指向央视网节目页。档案图片及旧址照片来自维基共享资源，页面展示缩略图并注明作者、许可和原始来源。
