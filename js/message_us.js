!function() {
    const n = document.createElement("link");
    n.rel = "stylesheet",
    n.href = "/css/message_us_font.css",
    document.head.appendChild(n);
    const e = {
        Title: "联系我",
        Avatar: "https://img.skyking.us.kg/file/1741221714139_02_3tx.png",
        BarCodeImg: "https://img.skyking.us.kg/file/1741260223941_webtxm.png",
        LineImg: "https://bu.dusays.com/2024/12/10/67583a6a4616e.png",
        Name: "kking",
        MainInfo: "有事找我？ - 我提供以下联系方式能帮你尽快找到我。",
        BottomInfo: "联系时间「10:00 - 18:00」",
        CloseBtn: "mu-icon-close1",
        Sticker: "mu-icon-face2",
        Icon: "mu-icon-face2",
        IconSize: "32px",
        Content: [{
            title: "Gmail",
            link: "mailto:xxxx@gmail.com",
            icon: "mu-icon-gmail"
        }, {
            title: "QQ邮箱",
            link: "mailto:xxxx@qq.com",
            icon: "mu-icon-qqmail"
        }, {
            title: "留言板",
            link: "/message/",
            icon: "mu-icon-comment"
        }, {
            title: "QQ",
            link: "https://qm.qq.com/cgi-bin/qm/qr?k=xxxx",
            icon: "mu-icon-qq"
        }, {
            title: "手机QQ",
            link: "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=xxxx",
            icon: "mu-icon-qq"
        }, {
            title: "哔哩哔哩",
            link: "https://space.bilibili.com/xxxx",
            icon: "mu-icon-bilibili"
        }]
    }
      , s = document.createElement("style");
    s.textContent = '\n    .message-us {\n      position: fixed;\n      bottom: 20px;\n      right: 70px;\n      z-index: 99999;\n      font-family: DD-jingbuti, Arial, sans-serif;\n      line-height: 1.5;\n    }\n    .message-us-toggle {\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      background-color: #4a90e2;\n      color: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);\n      border: 3px solid #fff;\n    }\n    .message-us-card {\n      position: absolute;\n      bottom: 60px;\n      right: 0;\n      width: 320px;\n      background: #f3f3f3;\n      border-radius: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n      overflow: hidden;\n      transition: all 0.3s ease;\n      opacity: 0;\n      transform: translateY(20px);\n      pointer-events: none;\n      border: 1px solid #e0e0e0;\n    }\n    .message-us-card.open {\n      opacity: 1;\n      transform: translateY(0);\n      pointer-events: all;\n    }\n    .message-us-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 16px 20px;\n      position: relative;\n      border-bottom: 1px solid #e0e0e0;\n      color: #333;\n    }\n    .message-us-status {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    .message-us-status::before {\n      content: "";\n      width: 8px;\n      height: 8px;\n      background-color: #4ADE80;\n      border-radius: 50%;\n      display: inline-block;\n    }\n    .message-us-close {\n      width: 24px;\n      height: 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      transition: background-color 0.2s;\n    }\n    .message-us-close:hover {\n      background-color: #f5f5f5;\n    }\n    .message-us-content {\n      padding: 0 20px 20px;\n      text-align: center;\n    }\n    .message-us-content img{\n      filter: blur(0) brightness(1);\n    }\n    .message-us-avatar {\n      width: 200px;\n      height: 160px;\n      border-radius: 50%;\n      margin: 60px auto 12px;\n    }\n    .message-us-name {\n      font-size: 18px;\n      font-weight: bold;\n      margin-bottom: 8px;\n      color: #333;\n    }\n    .message-us-barcode {\n      width: 140px;\n      height: 20px;\n      margin: 0px auto;\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n    }\n    .message-us-info {\n      margin: 16px 30px;\n      font-size: 14px;\n      color: #333;\n      line-height: 1.5;\n    }\n    .message-us-grid {\n      display: flex;\n      justify-content: center;\n      margin: 10px 0;\n      padding: 5px;\n      border-radius: 16px;\n      border-bottom: 1px solid #e0e0e0;\n    }\n    .message-us-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      color: #333;\n      background-color: #FF8A57;\n      border-radius: 8px;\n      border: 3px solid #d24848;\n      height: 97px;\n      margin: 0 1px;\n      width: 100%;\n    }\n    .message-us-item:hover {\n      background-color: #e05214;\n    }\n    .message-us-item i {\n      font-size: 35px;\n      color: white;\n      margin-bottom: 4px;\n    }\n    .message-us-item span {\n      font-size: 9px;\n      color: white;\n      min-width: 39px;\n      max-width: 258px;\n    }\n    .message-us-bottom-info {\n      text-align: center;\n      font-size: 12px;\n      color: #999;\n      margin: 10px 20px 0 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 4px;\n    }\n    .stickermleft {\n      margin-left: auto;\n    }\n    .mecline {\n      position: absolute;\n      bottom: 102px;\n      left: 0;\n      width: 320px;\n      height: auto;\n      pointer-events: none;\n    }\n    @media screen and (max-height: 640px) {\n      .message-us-card {\n        overflow: visible;\n      }\n      .message-us-avatar {\n        width: 80px;\n        height: 80px;\n        border-radius: 50%;\n        margin: 0;\n        position: absolute;\n        left: 24px;\n        bottom: 174px;\n        background-color: #FF8A57;\n        border: 4px solid #FF8A57;\n        border-bottom: 4px solid #f3f3f3;\n        transition: background-color 0.3s ease;\n      }\n      .message-us-avatar:hover {\n        background-color: #f3f3f3;\n      }\n      .message-us-name {\n        position: absolute;\n        margin-bottom: 0;\n        left: 128px;\n        top: 8px;\n      }\n      .message-us-header {\n        justify-content: end;\n      }\n      .message-us-barcode {\n        position: absolute;\n        left: 130px;\n        bottom: 0;\n      }\n      .message-us-info {\n        margin: 0;\n        font-size: 9px;\n        position: absolute;\n        left: 95px;\n        bottom: 176px;\n      }\n      .message-us-status {\n        position: absolute;\n        font-size: 0;\n        left: 114px;\n        bottom: 30px;\n      }\n      .message-us-close {\n        transform: translateX(10px) translateY(-6px);\n      }\n    }\n  ',
    document.head.appendChild(s),
    document.body.appendChild(function() {
        const n = document.createElement("div");
        n.className = "message-us";
        const s = document.createElement("div");
        s.className = "message-us-toggle",
        s.innerHTML = `<i class="messagefont ${e.Icon}" style="font-size: ${e.IconSize};"></i>`;
        const t = document.createElement("div");
        return t.className = "message-us-card",
        t.innerHTML = `\n      <div class="message-us-header">\n        <div class="message-us-status">\n          ${e.Title}\n        </div>\n        <div class="message-us-close"><i class="messagefont ${e.CloseBtn}"></i></div>\n      </div>\n      <div class="message-us-content">\n        <div>\n          <img src="${e.Avatar}" alt="${e.Name}" class="message-us-avatar">\n          <div class="message-us-name">${e.Name}</div>\n          <img class="message-us-barcode" src="${e.BarCodeImg}">\n          <p class="message-us-info">${e.MainInfo}</p>\n        </div>\n        <img class="mecline" src="${e.LineImg}">\n        <div>\n          <div class="message-us-grid">\n            ${e.Content.map((n => `\n              <a href="${n.link}" class="message-us-item" target="_blank" rel="noopener noreferrer">\n                <i class="messagefont ${n.icon}"></i>\n                <span>${n.title}</span>\n              </a>\n            `)).join("")}\n          </div>\n          <p class="message-us-bottom-info">${e.BottomInfo}<i class="stickermleft messagefont ${e.Sticker}"></i></p>\n        </div>\n      </div>\n    `,
        n.appendChild(s),
        n.appendChild(t),
        s.addEventListener("click", ( () => {
            t.classList.toggle("open")
        }
        )),
        t.querySelector(".message-us-close").addEventListener("click", ( () => {
            t.classList.remove("open")
        }
        )),
        n
    }())
}();
