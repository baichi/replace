/**
 * 1. 读出ajax文件夹下面的所有的文件
 * 2. 写循环依次读出此文件夹下面的所有的文件
 * 3. 对script内容进行替换为空
 * 4. 把替换后的内容写入文件中去
 **/
//引入fs模块
var fs = require('fs');
//读取ajax目录下面的所有的文件名
var files = fs.readdirSync('./ajax');
console.log(files);
//循环数组中的每个文件
files.forEach(function(file){
    //读取每个文件的内容，编码为utf8
    var content = fs.readFileSync('./ajax/ajax.html','utf8');
    //把要删除的内容替换成为空字符串
    content = content.replace(/d/,'');
    //把替换后的字符串写回原文件中去
    fs.writeFileSync('./ajax/ajax.html',content);
});

