// ==UserScript==
// @id             Amazon URL Cleaner
// @name           Amazon URL Cleaner
// @namespace      https://github.com/Artemis6425/Artemis-User-Scripts
// @author         azu 2 & Artemis6425
// @description    Removes URL tracking for Amazon URLs
// @include        *://*amazon.*/dp/*
// @include        *://*amazon.*/*gp/product/*
// @include        *://*amazon.*/exec/obidos/ASIN/*
// @include        *://*amazon.*/o/ASIN/*
// @version        1.02
// @downloadURL    https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Amazon%20URL%20Cleaner.user.js
// @updateURL      https://github.com/Artemis6425/Artemis-User-Scripts/raw/refs/heads/main/scripts/Amazon%20URL%20Cleaner.user.js
// ==/UserScript==
(function(doc) {
    // ASIN.0 in kindle store
    var asin = doc.getElementById("ASIN") || doc.getElementsByName("ASIN.0")[0];
    if (asin) {
        asin = asin.value
        history.replaceState(null, "Amazon URL Cleaner", "/dp/" + asin + "/");
    }
})(document);