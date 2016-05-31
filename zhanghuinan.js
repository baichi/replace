var fs=require('fs');
// fs is not define
//读取文件夹下面所有的文件 ，下面所有的文件组成一个数组
var files=fs.readdirSync("./ajax");
// ['ajax.html','ajax2.html']
//迭代循环这个数组,对数组中的每个元素执行函数
files.forEach(function(file){
    //先读出文件的内容
    var content=fs.readFileSync("./ajax/"+file,"utf8");
    //写一个正则
    var reg=/<SCRIPT\sLanguage=VBScript>[\s\S]+<\/SCRIPT>/m;
    content=content.replace(reg,"");
    console.log(content);
    fs.writeFileSync("./ajax/"+file,content);
});