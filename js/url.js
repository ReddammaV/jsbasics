document.write('<div class="container">');
// var url = location.href;
var url = 'http://www.mymainsite.com/somepath/path2/path3/path4';
console.log(url);

var pathname = new URL(url).pathname;

console.log(pathname);
document.write(pathname);

document.write('</div>');