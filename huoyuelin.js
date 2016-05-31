var fs=require("fs");
var files=fs.readdirSync('./ajax');
console.log(files);
files.forEach(function(file){
    var content=fs.readFileSync('./ajax/ajax.html','utf8');
    //把要替换的内容替换成空字符串
    content=content.replace(/d/,'');
    fs.writeFileSync(('./ajax/ajax.html',content));
});