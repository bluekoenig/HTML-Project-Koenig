import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {
    // console.log(canSeeMenu);

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})


let closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})



function sideBars(){
var tl = gsap.timeline();
tl.from(".moveme", {
    duration: 2,
x: -875, 

scrollTrigger: {
    trigger: ".moveme",
    start: "-900",
    end: "0",
    scrub: true,
    pin: false
}
});
return tl;
}

function sideBars2(){
var tl = gsap.timeline();
tl.to(".moveme2", {
    duration: 1,
x: 500, 

scrollTrigger: {
    trigger: ".moveme",
    start: "900",
    end: "0",
    scrub: true,
    pin: true
}
});
return tl;
}


var mainTL = gsap.timeline();
mainTL.add(sideBars(), sideBars2());



