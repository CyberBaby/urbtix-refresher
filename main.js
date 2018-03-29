// ==UserScript==
// @name         Urbtix auto refresher
// @namespace    http://google.com/
// @version      0.1
// @description  fun cheung
// @author       Knz
// @match        *://*.cityline.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {

    window.jQuery310 = $.noConflict(true);
    console.log(window.location.href);
    if(window.location.href.indexOf('busy')!=-1){
        console.log("Get server busy in url");
        setTimeout(function(){window.location.href = "http://event.cityline.com/utsvInternet/internet/action/event.do?actionFwd=eventDetail&event=24978&actionType=5&lang=TW";}, 1000);
    }

})();
