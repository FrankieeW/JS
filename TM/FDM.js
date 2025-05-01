// ==UserScript==
// @name         Download with Free Download Manager
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to download files with a specific downloader
// @author       You
// @match        *://*/*
// @grant
// ==/UserScript==

(function() {
    'use strict';

    // 示例：下载链接拦截
    let downloadLinks = document.querySelectorAll('a[href$=".zip"], a[href$=".rar"], a[href$=".mp4"]'); // 你可以根据需要修改选择器

    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let downloadUrl = link.href;
            // 调用自定义下载器
            startDownloadWithCustomDownloader(downloadUrl);
        });
    });

    // 自定义下载器启动
    function startDownloadWithCustomDownloader(url) {
        // 假设你已经有一个下载器配置了本地命令行接口（例如 aria2）
        // 你可以通过 HTTP 请求、WebSocket 或其他方式将 URL 发送给本地下载器

        // 示例：通过 aria2c 启动下载（命令行）
        const downloaderCommand = `aria2c ${url}`;  // 你可以用其他下载工具
