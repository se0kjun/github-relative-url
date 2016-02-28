'use strict';

var REGEX_REPO_URL = /^https?:\/\/github\.com\/.+?\/.+?\/.+?\/.+?\//i;
var REGEX_URL = /^(https?:\/\/|\/\/)/i;

module.exports = function(relativeUrl, baseUrl) {
	if (REGEX_URL.test(relativeUrl)) {
		return relativeUrl;
	}

	if (relativeUrl.indexOf('/') === 0) {
		var tmpUrl;
		if (tmpUrl = REGEX_REPO_URL.exec(baseUrl) || REGEX_RAW_URL.exec(baseUrl) || REGEX_GIST_URL.exec(baseUrl)) {
			return tmpUrl[0] + relativeUrl.substring(1);
		}
	} else {
		var idx = baseUrl.lastIndexOf('/');
		return baseUrl.substring(0, idx + 1) + relativeUrl;
	}
};
