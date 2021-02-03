var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, './ff.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
nodes.forEach((node) => {
  var selector = node.selector || '';
 console.log(node);
});


