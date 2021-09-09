let youtube = document.getElementsByClassName("fa-youtube")[0];
console.log(youtube);


let goYou = function changeYou() {
   

    youtube.style.color = "purple";

   window.open("https://www.youtube.com/channel/UCeK4tuluBGPXEBKOHbE9m5g", "_blank") 
}
// window.open(URL, '_blank');
youtube.onclick = goYou

// Instagram fonction click 

let instagram = document.getElementsByClassName("fa-instagram")[0];



let goIn = function changeYou() {
   

    instagram.style.color = "purple";

   window.open("https://www.instagram.com/unhealthy_fantasies/", "_blank") 
}
// window.open(URL, '_blank');
instagram.onclick = goIn

// Tiktok fonction click 


let tiktok = document.getElementsByClassName("fa-circle-o-notch")[0];



let goTik = function changeYou() {
   

    tiktok.style.color = "purple";

   window.open("https://www.tiktok.com/@unhealthy_fantasies?lang=fr", "_blank") 
}
// window.open(URL, '_blank');
tiktok.onclick = goTik


