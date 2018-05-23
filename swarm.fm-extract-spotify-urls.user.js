// ==UserScript==
// @name         swarm.fm extract Spotify URLs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract all the visible spotify URLs
// @author       sbinder
// @match        http://app.swarm.fm/
// @grant        none
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==


waitForKeyElements ("a[ng-href^='spotify:album:']", extractUrls);

function extractUrls (albums) {

    albums.each(function() {
        $('html').prepend("<span style=\"color:white\">" + $(this).attr("href") + "</span><br>");
     console.log($(this).attr("href"));
    });

}
