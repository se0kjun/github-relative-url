#github-relative-url

Github Relative url

##Install

	npm install github-relative-url --save

##Usage

	var githubRel = require('github-relative-url');

	var result = githubRel('../../main.js', 'https://github.com/se0kjun/kakaotalk-viewer/blob/master/src/scripts/message_parser/mac_parser.js');
	console.log(result);

	> 'https://github.com/se0kjun/kakaotalk-viewer/blob/master/src/scripts/message_parser/../../main.js'

##LICENSE

MIT © [Seokjun Hong](https://github.com/se0kjun)