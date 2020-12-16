let button = document.getElementById("bouton");
let img1 =document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let player = false, bot = false;
let divPl = document.getElementById("pl1");
let divBot = document.getElementById("pl2");
let images = ['SPOILER_ciseau.png','SPOILER_papier.png','SPOILER_pierre.png'];
let image1 = "SPOILER_ciseau.png";
let image2 = "SPOILER_papier.png";
let image3 = "SPOILER_pierre.png";
let span1 = document.getElementById("s1");
let span2 = document.getElementById("s2");
let span3 = document.getElementById("s3");

function ciseau(){
    divPl.style.backgroundImage = "url("+ image1 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];

}

function papier(){
    divPl.style.backgroundImage = "url("+ image2 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];
}

function pierre(){
    divPl.style.backgroundImage = "url("+ image3 +")";
    divBot.style.backgroundImage = "url("+ images[Math.floor(Math.random() *images.length)];
    for(let i = 0; image3 <= 2; i++){
        if(divPl === image3 && divBot === image1) {
            span1.innerHTML = " ok ";
        }
        else{

        }
    }
}

function reset(){
    span1.innerHTML = null;
    span2.innerHTML = null;
    span3.innerHTML = null;
    divBot.style.backgroundImage = null;
    divPl.style.backgroundImage = null;
}

img1.addEventListener('click',ciseau);
img2.addEventListener('click',papier);
img3.addEventListener('click',pierre);
button.addEventListener('click',reset);