var ejs = require('ejs');
var fs = require('fs');
var path = require('path');

var templates = fs.readdirSync(path.join(__dirname, '../templates'));

templates.forEach(function (tmplFile) {
	exports[tmplFile.slice(0, -4)] = processTemplate(path.join(__dirname, '../templates', tmplFile));
});

function processTemplate(tpl) {
	var content = fs.readFileSync(tpl);
	return ejs.compile(content.toString());
}

exports.processEjsTemplate = function(tpl) {
	return processTemplate(tpl);
}
