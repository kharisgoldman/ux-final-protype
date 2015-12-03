// My Scripts
var limit = 3;
var randNum = Math.floor(Math.random() * limit);

console.log(randNum);




var img = ['img/1.jpg','img/2.jpg','img/3.jpg'];




$('#banner').attr('src',img[randNum]);

$("article").lightGallery(); 