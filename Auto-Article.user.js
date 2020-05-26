// ==UserScript==
// @name         Auto Article
// @description  generate game info
// @author       desc_inno
// @namespace    https://github.com/desc70865/Auto-Article/
// @supportURL   https://github.com/desc70865/Auto-Article/issues
// @updateURL    https://github.com/desc70865/Auto-Article/raw/master/Auto-Article.user.js
// @version      0.1
// @icon         https://store.steampowered.com/favicon.ico
// @match        https://store.steampowered.com/app/*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    window.setTimeout(print,10000);
})();

function print() {
    var table = [];
    var date = new Date();
    var nowMonth = date.getMonth() + 1;
    var strDate = date.getDate();
    var seperator = "-";
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
    var name = jQuery('.apphub_AppName')[0].innerHTML.split('<div')[0];
    var discount = jQuery('.discount_pct')[0].innerHTML;
    var price = jQuery('.discount_final_price')[0].innerHTML;
    var appid = window.location.pathname.split('/')[2];
    var cover = jQuery('.game_header_image_full')[0].src;
    var text = jQuery('.game_description_snippet')[0].innerText;
    var mp4 = jQuery('.highlight_movie')[0].attributes[4].textContent.split('_vp9')[0] + '.mp4';
    var pics = jQuery('.highlight_screenshot_link')
    var details = jQuery('.game_area_description')[0].innerText;

    table.push('[b][size=4][' + nowDate + ']' + name + ' ' + discount + '/' + price + '[/size][/b]');
    table.push(' ');
    table.push('[sframe]' + appid + '[/sframe]');
    table.push('[sh1]游戏简介[/sh1]');
    table.push('[img]' + cover + '[/img]');
    table.push('[quote][b][size=3]' + text + '[/size][/b][/quote]');
    table.push('[sh1]游戏视频[/sh1]');
    table.push('[media=webm,500,375]' + mp4 + '[/media]');
    table.push('[sh1]游戏详情[/sh1]');
    table.push('[quote][b]' + details + '[/b][/quote]');
    table.push('[sh1]游戏截图[/sh1]');
    for(let i = 0; i < pics.length; i++ ){
        table.push('[img]' + pics[i].childNodes[1].currentSrc + '[/img]');
        table.push(' ');
    }

    console.log(table.join('\n'))
};
