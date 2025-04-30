// ==UserScript==
// @name         引用广告模块示例
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  引用并使用广告模块
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 加载广告模块
    const adScript = document.createElement('script');
    adScript.src = 'https://yourdomain.com/path/to/adModule.js'; // 这里替换成你广告模块的实际路径
    document.head.appendChild(adScript);

    // 确保广告模块加载完成后再调用
    adScript.onload = function() {
        // 调用广告模块的 showAd 方法，传入广告链接和配置选项
        AdModule.showAd('https://resolvedinsaneox.com/jqnqbsdt?key=16f8e475f8e6507dc07bb3707f64c2ad', {
            type: 'banner',          // 选择广告类型：popup, banner, fullscreen
            probability: 0.5,        // 50% 的概率展示广告
            timeout: 8000           // 横幅广告显示 8 秒
        });
    };
})();
