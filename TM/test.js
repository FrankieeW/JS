// ==UserScript==
// @name         引用广告模块示例
// @namespace    http://tampermonkey.net/
// @version      0.2@01-05-2025
// @description  引用并使用广告模块
// @author       Frankie
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/FrankieeW/JS/refs/heads/main/TM/test.js
// @downloadURL  https://raw.githubusercontent.com/FrankieeW/JS/refs/heads/main/TM/test.js
// ==/UserScript==

(function() {
    'use strict';

    // 加载广告模块
    const adScript = document.createElement('script');
    adScript.src = 'https://yourdomain.com/path/to/adModule.js'; // 这里替换成你广告模块的实际路径
    document.head.appendChild(adScript);

    // 确保广告模块加载完成后再调用
    adScript.onload = function() {
        console.log('广告模块已加载成功！');  // 调试信息

        // 调用广告模块的 showAd 方法，传入广告链接和配置选项
        AdModule.showAd('https://resolvedinsaneox.com/jqnqbsdt?key=16f8e475f8e6507dc07bb3707f64c2ad', {
            type: 'popup',          // 选择广告类型：popup, banner, fullscreen
            probability: 0.5,       // 50% 的概率展示广告
            timeout: 8000           // 横幅广告显示 8 秒
        });
    };

    adScript.onerror = function() {
        console.error('广告模块加载失败！请检查路径和网络连接。');  // 调试信息
    };
})();
