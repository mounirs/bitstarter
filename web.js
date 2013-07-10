var fs = require('fs');

var buf = fs.readFileSync('index.html');

var text = buf.toString(buf);


  console.log(text);
