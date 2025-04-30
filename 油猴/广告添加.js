// ==UserScript==
// @name         弹出链接（1/3概率）
// @version      0.1
// @description  随机弹出指定链接（1/3概率）
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 设定概率 1/3
    if (Math.random() < 1 / 3) {
        // 弹出指定链接
        window.open('https://resolvedinsaneox.com/jqnqbsdt?key=16f8e475f8e6507dc07bb3707f64c2ad', '_blank');
    }
})();
