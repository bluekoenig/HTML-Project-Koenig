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
    duration: 1,
x: -875, 

scrollTrigger: {
    trigger: ".moveme",
    markers: true,
    start: "-1000%",
    end: "10%",
    scrub: true,
    pin: false
}
});
return tl;
}

function sideBars2(){
    var tl = gsap.timeline();
    tl.from(".moveme2", {
        duration: 1,
    x: 875, 
    
    scrollTrigger: {
        trigger: ".moveme2",
        markers: true,
        start: "-1000%",
        end: "10%",
        scrub: true,
        pin: false
    }
    });
    return tl;
    }



    function fadeBox(){
        var tl = gsap.timeline();
        tl.from(".fadeBox", {
            duration: 1,
            alpha: 2,
        
        scrollTrigger: {
            trigger: ".fadeBox",
            markers: true,
            start: "-800%",
            end: "-400",
            scrub: true,
            pin: false
        }
        });
        return tl;
        }

    function fadeBox2(){
        var tl = gsap.timeline();
        tl.from(".fadeBox2", {
            duration: 1,
            alpha: 2,
        
        scrollTrigger: {
            trigger: ".fadeBox2",
            markers: true,
            start: "800%",
            end: "400",
            scrub: true,
            pin: false
        }
        });
        return tl;
    }

    
var mainTL = gsap.timeline();
mainTL.add(sideBars(), sideBars2(), fadeBox(), fadeBox2());



