// ==UserScript==
// @name         Urbtix auto refresher
// @namespace    http://google.com/
// @version      0.1
// @description  fun cheung
// @author       Knz
// @match        *://*.urbtix.hk/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {

    window.jQuery310 = $.noConflict(true);
    console.log(window.location.href);
    var sub_domain = window.location.href.split('.')[0].split('//')[1];
    if(sub_domain=='msg' || sub_domain=='busy'){
        console.log("Get server busy in url");
        setTimeout(function(){window.location.href = "http://www.urbtix.hk/";}, 1000);
    }

})();
// ==UserScript==
// @name         Urbtix auto refresher
// @namespace    http://google.com/
// @version      0.1
// @description  fun cheung
// @author       Knz
// @match        *://*.urbtix.hk/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {

    function checkUrl(){
        var sub_domain = window.location.href.split('.')[0].split('//')[1];
        if(sub_domain=='msg' || sub_domain=='busy'){
            console.log("Get server busy in url");
            return true;
        }
        return false;
    }
    function checkReloadBurron(){
        if(jQuery310('#reload-button').length){
            console.log("found reload button");
            return true;
        }
        return false;// ==UserScript==
// @name         Urbtix auto refresher
// @namespace    http://google.com/
// @version      0.1
// @description  fun cheung
// @author       Knz
// @match        *://*.urbtix.hk/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {

    function checkUrl(){
        var sub_domain = window.location.href.split('.')[0].split('//')[1];
        if(sub_domain=='msg' || sub_domain=='busy'){
            console.log("Get server busy in url");
            return true;
        }
        return false;
    }
    function checkReloadBurron(){
        if(jQuery310('#reload-button').length){
            console.log("found reload button");
            return true;
        }
        return false;
    }
    window.jQuery310 = $.noConflict(true);
    console.log(window.location.href);
    var sub_domain = window.location.href.split('.')[0].split('//')[1];
    if(checkUrl() || checkReloadBurron()){
        setTimeout(function(){window.location.href = "http://www.urbtix.hk/";}, 1000);
    }

    }
    window.jQuery310 = $.noConflict(true);
    console.log(window.location.href);
    var sub_domain = window.location.href.split('.')[0].split('//')[1];
    if(checkUrl() || checkReloadBurron()){
        setTimeout(function(){window.location.href = "http://www.urbtix.hk/";}, 1000);
    }
