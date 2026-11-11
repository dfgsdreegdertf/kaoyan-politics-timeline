const chronology = "https://www.mem.gov.cn/xw/ztzl/2021/dsxxjy/xxfd/202106/t20210628_390140.shtml";
const marxArchive = "https://www.sai.gov.cn/info/2421/100251.htm";
const greatMeetings = "https://tv.cctv.com/2012/12/10/VIDA1355145875967451.shtml";
const roadToRejuvenation = "https://tv.cctv.com/2012/12/15/VIDA1355567956637131.shtml";
const xinhaiSeries = "https://tv.cctv.com/2012/12/15/VIDA1355584140991885.shtml";
const marxSeries = "https://tv.cctv.com/2018/05/05/VIDA1EgLEijWNnWrSnQEryMt180505.shtml";
const newDaySeries = "https://tv.cctv.com/special/gjryhxt/index.shtml";

function location(url, text) {
  return `${url}#:~:text=${encodeURIComponent(text).replaceAll("-", "%2D")}`;
}

function resource(type, title, source, url, note) {
  return { type, title, source, url, note };
}

function archive(title, source, url, note) {
  return resource("史料", title, source, url, note);
}

function document(title, source, url, note) {
  return resource("文献", title, source, url, note);
}

function report(title, source, url, note) {
  return resource("报道", title, source, url, note);
}

function video(title, url, note) {
  return resource("影像", title, "央视网", url, note);
}

function annals(text, note) {
  return archive("《中国共产党一百年大事记》对应条目", "中共中央党史和文献研究院",
    location(chronology, text), note);
}

module.exports = {
  leaguejustice: [
    archive("正义者同盟与《共产党宣言》的历史背景", "中共上海市委党校", location(marxArchive, "德国流亡手工业者在巴黎组成正义者同盟"), "查读巴黎同盟的组织来源，以及后来为何改组。")
  ],
  opium: [
    archive("鸦片战争与近代中国的开端", "中央人民政府驻香港特别行政区联络办公室", "https://www.locpg.gov.cn/zggq/2014-01/04/c_125956421.htm", "对照旧民主主义革命与新民主主义革命的分期。"),
    video("《复兴之路》第一集 · 千年局变", location(roadToRejuvenation, "《复兴之路》 第一集 千年局变"), "从鸦片战争看到辛亥革命前的社会变化。"),
    resource("影视", "电影《鸦片战争》片段", "央视网", "https://tv.cctv.com/v/v1/VIDEZYULKEjJrpRC4GbaIlOX120529.html", "剧情片。可和史料对照观看。")
  ],
  nanjing: [
    archive("外交史上的今天 · 《南京条约》签订", "中华人民共和国外交部", "https://www.fmprc.gov.cn/ziliao_674904/historytoday_674971/200308/t20030829_7949137.shtml", "查读签订日期和条约对近代中国的影响。"),
    video("《辛亥革命》第一集 · 国难深重", location(xinhaiSeries, "第一集 国难深重"), "本集梳理鸦片战争及《南京条约》等条约的背景。")
  ],
  leaguecommunist: [
    archive("从正义者同盟改组为共产主义者同盟", "中共上海市委党校", location(marxArchive, "将“正义者同盟”改名为共产主义者同盟"), "把 1847 年的组织改组和 1848 年的纲领发表分开记。")
  ],
  manifesto: [
    document("《共产党宣言》（节选）学习导读", "全国哲学社会科学工作办公室", "https://www.nopss.gov.cn/GB/221341/221358/15379904.html", "阅读经典原文节选和写作背景，理解为什么以发表为诞生标志。"),
    video("《不朽的马克思》上集", marxSeries, "上集以《共产党宣言》的诞生和传播为主线。")
  ],
  jintian: [
    archive("金田起义旧址 · 广西全国重点文物保护单位名录", "北海市图书馆", "https://www.bhlib.cn/upload/files/2024/12/20/5.%E6%96%87%E5%8C%96%E5%92%8C%E6%97%85%E6%B8%B8%E7%BB%9F%E8%AE%A1%E6%95%B0%E6%8D%AE.pdf", "在 PDF 内搜索「金田起义地址」，核对旧址所在的桂平及保护单位信息。")
  ],
  tianjing: [
    archive("太平天国失败的原因及其历史教训", "《求是》文章 · 湖南省纪委监委网站", "https://www.sxfj.gov.cn/jing_cai_zhuan_ti/267e63/10907260.shtml", "在记住天京陷落时间的基础上，结合文章查读运动失败的原因。")
  ],
  international1: [
    archive("马克思与国际工人协会的成立", "海淀纪检监察网", location("https://www.hdcdi.gov.cn/new2022/qfsy/ljwh/202211/t20221130_4565545_ql.htm", "国际工人协会（后通称第一国际）"), "记住伦敦、国际工人协会与马克思这三个线索。"),
    video("《不朽的马克思》", marxSeries, "结合马克思参与国际工人运动的情节复习。")
  ],
  capital: [
    archive("《资本论》第一卷的出版与后续卷次", "全国哲学社会科学工作办公室", "https://www.nopss.gov.cn/n/2012/1130/c352693-19753371.html", "核对汉堡初版的时间，区分马克思生前出版与恩格斯整理出版的卷次。"),
    video("《不朽的马克思》下集", marxSeries, "下集重点呈现《资本论》的写作过程。")
  ],
  commune: [
    archive("1871 年 3 月 18 日巴黎公社革命爆发", "盐田档案与史志信息网", "https://www.yantian.gov.cn/ytdayszxxw/lsjt/content/post_11737223.html", "把革命爆发、巴黎公社建立和失败放在同一条时间线上。")
  ],
  international2: [
    archive("第二国际成立的时间与组织背景", "盐田档案与史志信息网", "https://www.yantian.gov.cn/ytdayszxxw/lsjt/content/post_11737718.html", "对照第一国际的伦敦会议，复习第二国际的巴黎会议。")
  ],
  shimonoseki: [
    document("《马关条约》条款及签订信息", "中华人民共和国外交部", "https://www.mfa.gov.cn/diaoyudao/chn/flfg/gjty/201510/t20151009_8560614.htm", "查读割地、赔款、通商和设厂等条款。"),
    video("《辛亥革命》第一集 · 国难深重", location(xinhaiSeries, "第一集 国难深重"), "本集包含甲午中日战争及其后的条约。")
  ],
  engels: [
    archive("恩格斯对马克思主义的贡献", "湖南省社会科学界联合会", "https://www.hnzk.gov.cn/zhikujianyan/11615.html", "查读他整理出版《资本论》第二卷和第三卷的工作。")
  ],
  reform1898: [
    archive("维新变法的发动、措施与结局", "广州市越秀区人民政府", "https://www.yuexiu.gov.cn/zjyx/yxgk/whhs/content/post_3560712.html", "从《明定国是诏》读到九月政变，掌握百日维新的起止。")
  ],
  boxerprotocol: [
    document("《辛丑条约》条款与签订经过", "盐田档案与史志信息网", "https://www.yantian.gov.cn/ytdayszxxw/lsjt/content/post_11735249.html", "重点查读赔款、驻兵及使馆区条款。"),
    video("《辛亥革命》第一集 · 国难深重", location(xinhaiSeries, "第一集 国难深重"), "回看八国联军侵华和《辛丑条约》的背景。")
  ],
  wuchang: [
    archive("辛亥革命武昌起义档案文献", "湖北省文化和旅游厅", "https://wlt.hubei.gov.cn/bmdt/xydt/201911/t20191121_1370506.shtml", "查看武昌起义档案文献进入湖北省档案文献遗产名录的介绍。"),
    video("《辛亥革命》电视文献片", xinhaiSeries, "在选集里按辛亥革命的进程观看。")
  ],
  republic: [
    report("《人民日报》回顾南京临时政府的成立", "《人民日报》1982 年 6 月 25 日第 5 版 · 数字档案", location("https://cn.govopendata.com/renminribao/1982/06/25/5/", "1912年元旦，孙中山在南京宣誓就职"), "查读 1912 年 1 月 1 日的就职宣言及临时政府的工作。"),
    video("《复兴之路》第二集 · 峥嵘岁月", location(roadToRejuvenation, "《复兴之路》 第二集 峥嵘岁月"), "从民国初年的政局开始梳理。")
  ],
  october: [
    archive("十月革命的过程及历史意义", "全国哲学社会科学工作办公室", "https://www.nopss.gov.cn/n/2012/1126/c352460-19701567-2.html", "查看彼得格勒起义、苏维埃政权建立与科学社会主义实践的关系。")
  ],
  comintern: [
    archive("共产国际的筹备、成立与解散", "财政部大连监管局", "https://dl.mof.gov.cn/lianzhengjianshe/202209/t20220930_3844358.htm", "定位 1919 年莫斯科代表大会，区分第三国际与前两个国际。")
  ],
  mayfourth: [
    report("回望五四那一天 · 档案中的「火烧赵家楼」", "西藏档案网", "https://da.xzdw.gov.cn/dayz/dajy/201904/t20190430_151192.html", "结合档案叙述看北京学生示威经过。"),
    annals("1919年5月4日", "查读北京学生运动与上海工人罢工声援的先后。")
  ],
  cpc1: [
    annals("中国共产党第一次全国代表大会在上海法租界", "查读上海开幕、转移到嘉兴南湖与党的第一个纲领。"),
    video("《旗帜》第一集 · 开天辟地", "https://tv.cctv.com/2011/06/19/VIDE1355591389104386.shtml", "文献纪录片回顾建党的背景和经过。")
  ],
  cpc2: [
    archive("第一部党章在这里诞生", "中央纪委国家监委网站", "https://m.ccdi.gov.cn/content/1a/b3/10688.html", "围绕二大制定第一部党章及最低纲领复习。"),
    annals("中国共产党第二次全国代表大会在上海举行", "查读大会如何区分最高纲领和最低纲领。")
  ],
  cpc3: [
    annals("中国共产党第三次全国代表大会在广州举行", "区分共产党员以个人身份加入国民党与党的政治、思想和组织独立性。")
  ],
  kmt1: [
    annals("中国国民党在广州召开第一次全国代表大会", "重点看三大政策和第一次国共合作正式形成。")
  ],
  april12: [
    annals("蒋介石在上海发动四一二反革命政变", "和同年武汉发生的七一五政变做人物、地点和时间对照。")
  ],
  july15: [
    annals("汪精卫召开国民党中央常务委员会扩大会议", "查读武汉决裂、大革命失败及第一次国共合作破裂。")
  ],
  nanchang: [
    annals("南昌起义标志着中国共产党独立领导革命战争", "查读起义的时间、参与者和建军史意义。"),
    video("《国家记忆》 · 南昌起义", "https://tv.cctv.com/2017/12/28/VIDE6tlFLvtfOBcGB46zKj8j171228.shtml", "用纪录片回顾起义经过。")
  ],
  august7: [
    annals("中共中央在湖北汉口召开紧急会议", "复习土地革命和武装反抗的总方针。"),
    video("《伟大的会议》 · 风雨星火——八七会议", location(greatMeetings, "风雨星火——八七会议"), "打开选集中的八七会议专题。")
  ],
  gutian: [
    annals("红四军党的第九次代表大会", "把会议与思想建党、政治建军的原则对应。"),
    video("《闽西 红色记忆》", "https://tv.cctv.com/2017/04/28/VIDA7zaz35ezoN1QJZiWthUs170428.shtml", "从红四军转战闽西的经过理解古田会议的背景。")
  ],
  zunyi: [
    annals("中央政治局在贵州遵义召开扩大会议", "对照会议本身和会后领导机构的调整。"),
    video("《伟大的会议》 · 伟大转折——遵义会议", location(greatMeetings, "伟大转折——遵义会议"), "打开选集中的遵义会议专题。")
  ],
  december9: [
    annals("抗日救亡运动（一二·九运动）", "复习北平学生运动与抗日救亡新高潮的联系。"),
    video("《大抗战》 · 一二·九运动", "https://tv.cctv.com/2023/12/09/VIDEI2EOcF2htnXX2yOfnr2t231209.shtml", "央视抗战纪录片中的北平学生运动专题。")
  ],
  wayaobu: [
    annals("中央政治局在陕北瓦窑堡召开扩大会议", "查读抗日民族统一战线策略方针的提出。"),
    video("《伟大的会议》 · 勇立潮头——瓦窑堡会议", location(greatMeetings, "勇立潮头——瓦窑堡会议"), "打开选集中的瓦窑堡会议专题。")
  ],
  huining: [
    annals("红一、红四方面军在甘肃会宁会师", "区分会宁会师与将台堡会师的日期及参会部队。")
  ],
  xian: [
    annals("张学良、杨虎城发动西安事变", "复习和平解决的经过和国共合作抗日的转折。"),
    video("央视纪录片《西安事变》", "https://tv.cctv.com/2016/12/27/VIDAUnU84Y2nxJPoV6clRHKv161227.shtml", "五集纪录片按事变的背景、经过和解决展开。")
  ],
  lugou: [
    annals("日本侵略军发动卢沟桥事变", "梳理七七事变与全民族抗战开始的关系。")
  ],
  luochuan: [
    annals("中共中央在陕北洛川召开政治局扩大会议", "查读《抗日救国十大纲领》和会议的召开地点。"),
    video("《伟大的会议》 · 指路明灯——洛川会议", location(greatMeetings, "指路明灯——洛川会议"), "打开选集中的洛川会议专题。")
  ],
  sixth6: [
    annals("中共扩大的六届六中全会在延安召开", "区分提出马克思主义中国化命题与中共七大确立指导思想。")
  ],
  newdemocracy: [
    document("《新民主主义论》", "上海科技党建", "https://www.shkjdw.gov.cn/c/2014-05-13/489671.shtml", "从新民主主义的政治、经济和文化三个方面读原著。"),
    annals("毛泽东发表《新民主主义论》", "查读发表时间及其在新民主主义理论发展中的位置。")
  ],
  cpc7: [
    annals("中国共产党第七次全国代表大会在延安举行", "查读《论联合政府》和毛泽东思想确立为指导思想。"),
    video("《伟大的会议》 · 曙光在前——中共七大", location(greatMeetings, "曙光在前——中共七大"), "打开选集中的中共七大专题。")
  ],
  seventh2: [
    annals("中共七届二中全会在西柏坡召开", "对照党的工作重心转移和「两个务必」。")
  ],
  cppcc1: [
    annals("中国人民政治协商会议第一届全体会议在北平举行", "查读政协首届全体会议和《共同纲领》相关条目。"),
    video("《国家记忆》 · 人民政协诞生之路", "https://tv.cctv.com/2019/09/20/VIDEPE9i0scDzvDTkIa4zegV190920.shtml", "回顾首届政协与开国大典的筹备过程。")
  ],
  prc: [
    annals("庆祝中华人民共和国中央人民政府成立典礼在北京天安门广场隆重举行", "从 10 月 1 日条目查读中央人民政府成立的过程。"),
    video("1949 年 10 月 1 日 · 开国大典", "https://tv.cctv.com/v/v1/VIDE1355508018661251.html", "央视历史影像回顾。")
  ],
  seventh3: [
    annals("为争取国家财政经济状况的基本好转而斗争", "重点看 1950 年全会对恢复国民经济的部署。")
  ],
  npc1: [
    archive("一届全国人大一次会议的召开", "北京市人大常委会", "https://www.bjrd.gov.cn/rdzl/rdzc/rdzd/202410/t20241022_3925236.html", "查读首部宪法和人民代表大会制度的确立。")
  ],
  cpc8: [
    archive("中共八大与国内主要矛盾的判断", "国家发展和改革委员会", "https://www.ndrc.gov.cn/fggz/fgjh/djzc/202104/t20210429_1278630_ext.html", "区分社会主要矛盾的判断与发展生产力的任务。")
  ],
  eleventh3: [
    archive("中共十一届三中全会专题", "国家发展和改革委员会", "https://www.ndrc.gov.cn/fggz/fgjh/djzc/202104/t20210429_1278631_ext.html", "查读工作重点转移和改革开放的历史性决策。"),
    video("《敢教日月换新天》 · 十一届三中全会", "https://tv.cctv.com/2021/06/24/VIDEpiTjGGOkLnOuNKZ6SpvL210624.shtml", "围绕全会与历史转折观看。")
  ],
  eleventh6: [
    annals("中共十一届六中全会召开", "查读历史决议与指导思想上拨乱反正的关系。"),
    video("《敢教日月换新天》 · 指导思想的拨乱反正", "https://tv.cctv.com/2021/06/24/VIDEG2tvns1Rb8BjYyELk32G210624.shtml", "专题回顾《关于建国以来党的若干历史问题的决议》。")
  ],
  cpc12: [
    archive("中共十二大会议资料", "国家体育总局", "https://www.sport.gov.cn/n4/n133/n137/c322824/content.html", "查读开幕词中的「建设有中国特色的社会主义」。")
  ],
  cpc13: [
    annals("中国共产党第十三次全国代表大会举行", "复习社会主义初级阶段理论、基本路线与三步走发展战略。")
  ],
  southern: [
    annals("邓小平视察武昌、深圳、珠海、上海等地并发表谈话", "把谈话涉及的地点、「三个有利于」和市场经济改革背景串起来。"),
    video("《敢教日月换新天》 · 东方风来满眼春", location(newDaySeries, "东方风来满眼春"), "在节目页定位南方谈话相关片段。")
  ],
  cpc14: [
    archive("中共十四大会议资料", "国家发展和改革委员会", "https://www.ndrc.gov.cn/fggz/fgjh/djzc/202104/t20210429_1278634_ext.html", "重点查读社会主义市场经济体制为何成为经济体制改革目标。")
  ],
  cpc15: [
    archive("中共十五大会议资料", "国家发展和改革委员会", "https://www.ndrc.gov.cn/fggz/fgjh/djzc/202104/t20210429_1278635.html", "查读邓小平理论、基本纲领及经济制度相关表述。")
  ],
  wto: [
    archive("我国加入世界贸易组织的历程", "中华人民共和国商务部", "https://chinawto.mofcom.gov.cn/article/ap/p/202111/20211103216235.shtml", "区分多哈会议批准与中国正式成为成员的时间。"),
    video("《敢教日月换新天》 · 从复关到入世", location(newDaySeries, "从“复关”到“入世”中国进行了长达15年的谈判"), "在节目页定位入世谈判片段。")
  ],
  cpc16: [
    document("十六大关于十五届中央委员会报告的决议", "中华人民共和国外交部", "https://www.mfa.gov.cn/ziliao_674904/zt_674979/ywzt_675099/zt2002_675989/2319_676055/200211/t20021115_7965279.shtml", "查读「三个代表」重要思想与全面建设小康社会目标。")
  ],
  cpc17: [
    document("十七大关于十六届中央委员会报告的决议", "中共中央台湾工作办公室", "https://www.gwytb.gov.cn/zt/djzt/17thCongress/201101/t20110126_1734531.htm", "复习科学发展观的内容与大会提出的目标。")
  ],
  cpc18: [
    annals("中国共产党第十八次全国代表大会举行", "查读报告与决议，对比「全面建设小康社会」与「全面建成小康社会」的表述。")
  ],
  cpc19: [
    document("十九大报告全文", "中华人民共和国最高人民检察院", "https://www.spp.gov.cn/tt/201710/t20171018_202773.shtml", "读中国特色社会主义进入新时代与社会主要矛盾的新表述。"),
    video("中国共产党第十九次全国代表大会开幕会", "https://tv.cctv.com/2017/10/12/VIDAM184sVNSTXtJClCEsjZR171012.shtml", "央视开幕会专题。")
  ],
  cpc20: [
    document("二十大报告全文", "中国政府网", "https://app.www.gov.cn/govdata/gov/202210/25/493662/article.html", "定位报告中关于中国式现代化的中国特色、本质要求和战略安排。"),
    report("党的二十大报告速览", "中央网络安全和信息化委员会办公室", "https://www.cac.gov.cn/2022-10/16/c_1667545621406581.htm", "按主题浏览报告重点。"),
    video("中国共产党第二十次全国代表大会开幕会现场", "https://tv.cctv.com/2022/10/16/VIDEivjGyCenRRSY3s2M6AEk221016.shtml", "央视现场报道。")
  ],
};
