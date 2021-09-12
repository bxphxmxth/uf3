let youtube = document.getElementsByClassName("fa-youtube")[0];
console.log(youtube);


let goYou = function changeYou() {
   

    youtube.style.color = "purple";

   window.open("https://www.youtube.com/channel/UCeK4tuluBGPXEBKOHbE9m5g", "_blank") 
}
youtube.onclick = goYou

// Instagram fonction click 

let instagram = document.getElementsByClassName("fa-instagram")[0];



let goIn = function changeYou() {
   

    instagram.style.color = "purple";

   window.open("https://www.instagram.com/unhealthy_fantasies/", "_blank") 
}
instagram.onclick = goIn

// Tiktok fonction click 


let tiktok = document.getElementsByClassName("fa-circle-o-notch")[0];



let goTik = function changeYou() {
   

    tiktok.style.color = "purple";

   window.open("https://www.tiktok.com/@unhealthy_fantasies?lang=fr", "_blank") 
};
// window.open(URL, '_blank');
tiktok.onclick = goTik


let bandcamp = document.getElementsByClassName("fa-bandcamp")[0];
console.log(bandcamp);


let goBand = function changeBand() {
   

    bandcamp.style.color = "purple";

   window.open("https://unhealthyfantasi3s.bandcamp.com/", "_blank") 
}
bandcamp.onclick = goBand


// Inverted logo

let cat = document.getElementsByClassName("leLogo")[0];
console.log(cat)

let invert = function changeColor(){

    if(cat.style.filter = 0){

        cat.style.filter ="invert(100%)";

    }else{
        cat.classList.toggle("logoInvert");
    }

    }


cat.onclick = invert;