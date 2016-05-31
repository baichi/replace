var fs = require('fs');
var path = require('path');
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

travel('./ajax',function(filename){
    if(filename.indexOf('.html') != -1){
        var content=fs.readFileSync(filename,"utf8");
        var reg=/<SCRIPT\sLanguage=VBScript>[\s\S]+<\/SCRIPT>/m;
        content=content.replace(reg,"");
        //console.log(content);
        fs.writeFileSync(filename,content);
    }

});