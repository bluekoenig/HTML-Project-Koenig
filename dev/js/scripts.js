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


function movemes(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#best-friends-container", markers:false, scrub:true,end:"bottom center"}});
    tl.from(".moveme",{duration:1,x:-800},"moveMeTogether")
     .from(".moveme2",{duration:1,x:800},"moveMeTogether");
    return tl;
}

function fadeyGuys(){
var tl = gsap.timeline({scrollTrigger:{trigger:"#callouts", markers: false, scrub:true,end:"bottom center"}});
tl.from(".fadeBox", {duration: 1.5, opacity:0}, "fadeFriends")
.from(".fadeBox2", {duration: 1.5, opacity:0}, "fadeFriends")
.from(".callout-image", {duration: .5, opacity:0, rotate: 360, delay:.5}, "spinnyboys")
return tl;
}

function caaaards(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#article-layout", markers:true, scrub:true, end:"bottom bottom"}});
    tl.from("#c1", {duration:.75, clipPath:"inset(0% 100% 0% 0%)"})
    .from("#c2", {duration:.75, delay:.15, clipPath:"inset(0% 100% 0% 0%)"})
    .from("#c3", {duration:.75,delay:.15, clipPath:"inset(0% 100% 0% 0%)"})
    .from("#c4", {duration:.75,delay:.15, clipPath:"inset(0% 100% 0% 0%)"})
    .from("#c5", {duration:.75,delay:.15, clipPath:"inset(0% 100% 0% 0%)"})
    .from("#im1", {duration:.75, opacity:0},"-=2.5")
    .from("#im2", {duration:.75, opacity:0},"-=2")
    .from("#im3", {duration:.75, opacity:0},"-=1.5")
    .from("#im4", {duration:.75, opacity:0},"-=1")
    .from("#im5", {duration:.75, opacity:0},"-=.5");
    return tl;
}

function leb(){
    var tl = gsap.timeline();
    tl.from("leaf-logo", {duration:.5, rotate: 360});
    return tl;
}





// 


// function sideBars(){
// var tl = gsap.timeline();
// tl.from(".moveme", {
//     duration: 1,
// x: -875, 

// scrollTrigger: {
//     trigger: ".moveme",
//     markers: true,
//     start: "-100%",
//     end: "-50%",
//     scrub: true,
//     pin: false
// }
// });
// return tl;
// }

// function sideBars2(){
//     var tl = gsap.timeline();
//     tl.from(".moveme2", {
//         duration: 1,
//     x: 875, 
    
//     scrollTrigger: {
//         trigger: ".moveme2",
//         markers: true,
//         start: "-100%",
//         end: "-50%",
//         scrub: true,
//         pin: false
//     }
//     });
//     return tl;
//     }



    // function fadeBox(){
    //     var tl = gsap.timeline();
    //     tl.from(".fadeBox", {
    //         duration: 1,
    //         alpha: 2,
        
    //     scrollTrigger: {
    //         trigger: ".fadeBox",
    //         markers: true,
    //         start: "-100%",
    //         end: "-20%",
    //         scrub: true,
    //         pin: false
    //     }
    //     });
    //     return tl;
    //     }

    // function fadeBox2(){
    //     var tl = gsap.timeline();
    //     tl.from(".fadeBox2", {
    //         duration: 1,
    //         alpha: 2,
        
    //     scrollTrigger: {
    //         trigger: ".fadeBox2",
    //         markers: true,
    //         start: "800%",
    //         end: "400",
    //         scrub: true,
    //         pin: false
    //     }
    //     });
    //     return tl;
    // }

    
var mainTL = gsap.timeline();
mainTL.add(movemes())
.add(fadeyGuys())
.add(caaaards())
.add(leb());
// mainTL.add(sideBars(), sideBars2())
// .add(fadeBox(), fadeBox2());


