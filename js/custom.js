let ipLocation,year,month,week,date,dates,weekStr,monthStr,asideTime,asideDay,asideDayNum,animalYear,ganzhiYear,lunarMon,lunarDay;function getDistance(e,a,t,n){const{sin:r,cos:o,asin:s,PI:i,hypot:c}=Math;let d=(e,a)=>(e*=i/180,{x:o(a*=i/180)*o(e),y:o(a)*r(e),z:r(a)}),l=d(e,a),u=d(t,n),y=2*s(c(l.x-u.x,l.y-u.y,l.z-u.z)/2)*6371;return Math.round(y)}function showWelcome(){if(!ipLocation||!ipLocation.data)return void console.error("ipLocation data is not available.");let e,a,t=getDistance(108.8764,34.1452,ipLocation.data.lng,ipLocation.data.lat),n=ipLocation.data.country;ipLocation.ip;switch(ipLocation.data.country){case"日本":e="よろしく，一起去看樱花吗";break;case"美国":e="Let us live in peace!";break;case"英国":e="想同你一起夜乘伦敦眼";break;case"俄罗斯":e="干了这瓶伏特加！";break;case"法国":e="C'est La Vie";break;case"德国":e="Die Zeit verging im Fluge.";break;case"澳大利亚":e="一起去大堡礁吧！";break;case"加拿大":e="拾起一片枫叶赠予你";break;case"中国":switch(n=ipLocation.data.prov+" "+ipLocation.data.city+" "+ipLocation.data.district,ipLocation.data.prov){case"北京市":e="北——京——欢迎你~~~";break;case"上海市":e="走在外滩，感受历史与现代的交融。";break;case"广东省":switch(ipLocation.data.city){case"广州市":e="看小蛮腰，喝早茶了嘛~";break;case"深圳市":e="今天你逛商场了嘛~";break;default:e="带你感受广东的热情与美食！"}break;case"浙江省":switch(ipLocation.data.city){case"杭州市":e="西湖美景，三月天~";break;case"宁波市":e="来宁波，感受大海的气息。";break;default:e="这里是浙江，充满江南的韵味！"}break;case"四川省":switch(ipLocation.data.city){case"成都市":e="宽窄巷子，成都慢生活。";break;case"绵阳市":e="享受科技城的宁静与创新。";break;default:e="来四川，品麻辣火锅，赏壮丽山河。"}break;case"福建省":switch(ipLocation.data.city){case"厦门市":e="鼓浪屿听海，厦门美食让人流连忘返。";break;case"福州市":e="有福之州，来此感受千年古城。";break;default:e="福建山水如画，美景无处不在。"}break;case"山东省":switch(ipLocation.data.city){case"青岛市":e="来青岛喝啤酒，看大海吧！";break;case"济南市":e="泉城济南，四面荷花三面柳。";break;default:e="山东好客，欢迎来感受齐鲁文化！"}break;case"江苏省":switch(ipLocation.data.city){case"南京市":e="六朝古都南京，历史与现代的碰撞。";break;case"苏州市":e="来苏州，感受园林之美。";break;default:e="水乡泽国，江南佳丽地。"}break;case"河北省":e="燕赵大地，英雄辈出的河北，等你探索！";break;case"河南省":switch(ipLocation.data.city){case"郑州市":e="中原大地，郑州是交通枢纽与历史重镇。";break;case"洛阳市":e="千年古都洛阳，牡丹花开的城市。";break;default:e="这里是河南，历史悠久文化灿烂。"}break;case"湖南省":if("长沙市"===ipLocation.data.city)e="热辣长沙，吃小龙虾逛黄兴路步行街。";else e="湖南，烟雨迷蒙的湘江流过这片土地。";break;case"湖北省":if("武汉市"===ipLocation.data.city)e="来大武汉，过长江大桥，吃热干面！";else e="湖北，长江中游的明珠，风景秀丽。";break;case"安徽省":if("合肥市"===ipLocation.data.city)e="创新之城合肥，科教文化汇聚地。";else e="安徽山水，黄山、九华山欢迎你。";break;case"广西壮族自治区":switch(ipLocation.data.city){case"桂林市":e="桂林山水甲天下，风景如画。";break;case"南宁市":e="绿城南宁，宜居宜游。";break;default:e="广西山清水秀，民俗风情浓郁。"}break;case"贵州省":e="来贵州，品茅台，赏黄果树瀑布。";break;case"云南省":switch(ipLocation.data.city){case"昆明市":e="春城昆明，四季如春，风景秀丽。";break;case"大理市":e="苍山洱海，大理古城，你来了就不想走。";break;default:e="云南风景独特，风情万种。"}break;case"西藏自治区":e="世界屋脊西藏，神秘而纯净。";break;case"新疆维吾尔自治区":e="辽阔新疆，民族风情与壮丽景观并存。";break;case"内蒙古自治区":e="草原辽阔的内蒙古，等你来策马奔腾。";break;case"宁夏回族自治区":e="宁夏，塞上江南，黄河流经的美丽地方。";break;case"海南省":e="阳光、沙滩、椰风海韵，欢迎来海南度假。";break;default:e="带我去你的城市逛逛吧！"}break;default:e="带我去你的国家逛逛吧"}let r=new Date;a=r.getHours()>=5&&r.getHours()<11?"<span>🌤️ 早上好，一日之计在于晨</span>":r.getHours()>=11&&r.getHours()<13?"<span>☀️ 中午好，记得午休喔~</span>":r.getHours()>=13&&r.getHours()<17?"<span>🕞 下午好，饮茶先啦！</span>":r.getHours()>=17&&r.getHours()<19?"<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>":r.getHours()>=19&&r.getHours()<24?"<span>🌙 晚上好，夜生活嗨起来！</span>":"夜深了，早点休息，少熬夜";let o=document.getElementById("welcome-info");o&&(o.innerHTML=`欢迎来自 <b><span style="color: var(--efu-main)">${n}</span></b> 的小友💖<br>当前位置距博主约 <b><span style="color: var(--efu-main)">${t.toFixed(2)}</span></b> 公里！<br>${a}<br>Tip：<b><span style="font-size: 15px;">${e}</span></b>`)}function handlePjaxComplete(){isHomePage()&&showWelcome()}function isHomePage(){return"/"===window.location.pathname||"/index.html"===window.location.pathname}function initializeCard(){cardTimes(),cardRefreshTimes()}fetch("https://api.nsmao.net/api/ip/query?key=7s6oqQUBTNq57QBqeGWcr6Ff5s").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{ipLocation=e,isHomePage()&&showWelcome()})).catch((e=>console.error("Error:",e))),window.onload=function(){isHomePage()&&showWelcome(),document.addEventListener("pjax:complete",handlePjaxComplete)},document.addEventListener("DOMContentLoaded",(function(){async function e(){const e=document.getElementById("history-container");if(!e)return;const a=await async function(){const e=new Date,a=(`${e.getMonth()+1}`.padStart(2,"0"),`${e.getDate()}`.padStart(2,"0"),"https://api.nsmao.net/api/history/query?key=7s6oqQUBTNq57QBqeGWcr6Ff5s");try{const e=await fetch(a),t=await e.json();if(200===t.code){const e=t.data,a=Object.entries(e).map((([e,a])=>({year:e.replace(/年$/,""),title:a})));return a}return console.error("Error fetching history data:",t.msg),[]}catch(e){return console.error("Fetch error:",e),[]}}(),t=a.map((e=>`\n            <div class="swiper-slide history_slide">\n                <span class="history_slide_time">A.D.${e.year}</span>\n                <span class="history_slide_link">${e.title}</span>\n            </div>\n        `)).join(""),n=document.querySelector(".history_swiper-container");document.getElementById("history_container_wrapper").innerHTML=t;const r=new Swiper(n,{loop:!0,direction:"vertical",autoplay:{disableOnInteraction:!0,delay:5e3},mousewheel:!1});e.onmouseenter=()=>r.autoplay.stop(),e.onmouseleave=()=>r.autoplay.start()}e(),document.addEventListener("pjax:complete",e),e(),document.addEventListener("pjax:complete",e)})),document.addEventListener("DOMContentLoaded",(()=>{initializeCard()})),document.addEventListener("pjax:complete",(()=>{initializeCard()}));const now=new Date;function cardRefreshTimes(){const e=document.getElementById("card-widget-schedule");e&&(asideDay=(now-asideTime)/1e3/60/60/24,e.querySelector("#pBar_year").value=asideDay,e.querySelector("#p_span_year").innerHTML=(asideDay/365*100).toFixed(1)+"%",e.querySelector(".schedule-r0 .schedule-d1 .aside-span2").innerHTML=`还剩<a> ${(365-asideDay).toFixed(0)} </a>天`,e.querySelector("#pBar_month").value=date,e.querySelector("#pBar_month").max=dates,e.querySelector("#p_span_month").innerHTML=(date/dates*100).toFixed(1)+"%",e.querySelector(".schedule-r1 .schedule-d1 .aside-span2").innerHTML=`还剩<a> ${dates-date} </a>天`,e.querySelector("#pBar_week").value=0===week?7:week,e.querySelector("#p_span_week").innerHTML=((0===week?7:week)/7*100).toFixed(1)+"%",e.querySelector(".schedule-r2 .schedule-d1 .aside-span2").innerHTML=`还剩<a> ${7-(0===week?7:week)} </a>天`)}function cardTimes(){year=now.getFullYear(),month=now.getMonth(),week=now.getDay(),date=now.getDate();const e=document.getElementById("card-widget-calendar");if(e){weekStr=["周日","周一","周二","周三","周四","周五","周六"][week];const a=[{month:"1月",days:31},{month:"2月",days:year%4==0&&year%100!=0||year%400==0?29:28},{month:"3月",days:31},{month:"4月",days:30},{month:"5月",days:31},{month:"6月",days:30},{month:"7月",days:31},{month:"8月",days:31},{month:"9月",days:30},{month:"10月",days:31},{month:"11月",days:30},{month:"12月",days:31}];monthStr=a[month].month,dates=a[month].days;const t=(week+8-date%7)%7;let n="",r=!1,o=7-t;const s=(dates-o)%7==0?Math.floor((dates-o)/7)+1:Math.floor((dates-o)/7)+2,i=e.querySelector("#calendar-main");e.querySelector("#calendar-date").style.fontSize=["64px","48px","36px"][Math.min(s-3,2)];for(let e=0;e<s;e++){i.querySelector(`.calendar-r${e}`)||(i.innerHTML+=`<div class='calendar-r${e}'></div>`);for(let a=0;a<7;a++){0===e&&a===t&&(n=1,r=!0);const o=n===date?" class='now'":"";i.querySelector(`.calendar-r${e} .calendar-d${a} a`)||(i.querySelector(`.calendar-r${e}`).innerHTML+=`<div class='calendar-d${a}'><a${o}>${n}</a></div>`),n>=dates&&(n="",r=!1),r&&(n+=1)}}const c=chineseLunar.solarToLunar(new Date(year,month,date));animalYear=chineseLunar.format(c,"A"),ganzhiYear=chineseLunar.format(c,"T").slice(0,-1),lunarMon=chineseLunar.format(c,"M"),lunarDay=chineseLunar.format(c,"d");const d=new Date("2025/01/28 00:00:00"),l=Math.floor((d-now)/1e3/60/60/24);asideTime=new Date(`${(new Date).getFullYear()}/01/01 00:00:00`),asideDay=(now-asideTime)/1e3/60/60/24,asideDayNum=Math.floor(asideDay);const u=week-asideDayNum%7>=0?Math.ceil(asideDayNum/7):Math.ceil(asideDayNum/7)+1;e.querySelector("#calendar-week").innerHTML=`第${u}周&nbsp;${weekStr}`,e.querySelector("#calendar-date").innerHTML=date.toString().padStart(2,"0"),e.querySelector("#calendar-solar").innerHTML=`${year}年${monthStr}&nbsp;第${asideDay.toFixed(0)}天`,e.querySelector("#calendar-lunar").innerHTML=`${ganzhiYear}${animalYear}年&nbsp;${lunarMon}${lunarDay}`,document.getElementById("schedule-days").innerHTML=l}}