document.querySelector("#ser").addEventListener("mouseover",function(){
     document.querySelector("#nav").style.borderBottom="1px solid rgba(33, 33, 33, 0.518)"
     document.querySelector("#service").style.opacity=1;
     document.querySelector("#service").style.transition=".6s ease";
})
document.querySelector("#service").addEventListener("mouseleave",function(){
     document.querySelector("#service").style.opacity=0;
     document.querySelector("#nav").style.borderBottom="none" 
     document.querySelector("#service").style.transition=".6s ease";
})
document.querySelector("#menu").addEventListener("click",function(){
     if(flag===0)
     {
          document.querySelector("#line1").style.transform="rotate(-37deg) translate(-45%,0%)";
          document.querySelector("#line2").style.display="none";
          document.querySelector("#line1").style.width="28px";
          document.querySelector("#line3").style.transform="rotate(37deg) translate(-45%,0%)";
          document.querySelector("#line3").style.width="28px";
          document.querySelector("#line1").style.transition="transform ease 0.5s";
          document.querySelector("#line3").style.transition="transform ease 0.5s";
          document.querySelector("#cover-media").style.bottom="0%";
          document.querySelector("#cover-media").style.transition="ease 1s";
          document.querySelector("#cover-media").style.opacity=1;
          flag=1;
     }
     else{
          document.querySelector("#line1").style.transform="rotate(0deg) translate(0%,0%)";
          document.querySelector("#line2").style.display="block";
          document.querySelector("#line1").style.width="35px";
          document.querySelector("#line3").style.transform="rotate(0deg) translate(0%,0%)";
          document.querySelector("#line3").style.width="15px";
          document.querySelector("#line1").style.transition=" ease 0.5s"
          document.querySelector("#line3").style.transition=" ease 0.5s"
          document.querySelector("#cover-media").style.transition="ease 1s";
          document.querySelector("#cover-media").style.bottom="-100%";
          document.querySelector("#cover-media").style.opacity=0;
          flag=0;
     }
})
var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     centeredSlides: true,
     grabCursor: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
   function show(){
     gsap.registerPlugin(ScrollTrigger);
 
     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
     
     const locoScroll = new LocomotiveScroll({
       el: document.querySelector("#main"),
       smooth: true
     });
     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
     locoScroll.on("scroll", ScrollTrigger.update);
     
     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
     ScrollTrigger.scrollerProxy("#main", {
       scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
       getBoundingClientRect() {
         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
       },
       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
     }); 
     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
     
     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
     ScrollTrigger.refresh();
     
 }
 show();
var flag=0;

gsap.from("#img1",{
    y:100,
    duration:1,
    opacity:0
})
gsap.from("#img2",{
     x:150,
     duration:1,
     opacity:0
},"-=1")
gsap.from("#img3",{
     y:-150,
     duration:1,
     opacity:0
},"-=1")
gsap.from("#page2 h2,#page2 h1,#about",{
     scrollTrigger:{
         trigger:"#page2",
         scroller:"#main",
         start:"top 50%",
     },
     y:30,
     duration:2,
     opacity:0,
     ease:Expo.easeInOut,
     stagger:1
})
gsap.from("#left-part1 img,#left-part2 img,#right h1,#right p,#learn",{
     scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 60%",
     },
     y:30,
     duration:2,
     opacity:0,
     ease:Expo.easeInOut,
     stagger:0.2
})
gsap.from("#page4 h1,#images",{
     scrollTrigger:{
          trigger:"#page4",
          scroller:"#main",
          start:"top 60%",
       },
       y:30,
       duration:2,
       opacity:0,
       ease:Expo.easeInOut,
       stagger:0.2
})
gsap.from("#page5-inner-div-left,#page5-inner-div-right",{
     scrollTrigger:{
          trigger:"#page5",
          scroller:"#main",
          start:"top 60%",
       },
       y:30,
       duration:2,
       opacity:0,
       ease:Expo.easeInOut,
       stagger:0.1
})
gsap.from(".seemore",{
     scrollTrigger:{
          trigger:"#page5",
          scroller:"#main",
          start:"top 64%",
       },
       delay:1,
       y:30,
       duration:2,
       opacity:0,
       ease:Expo.easeInOut,
       stagger:0.2
})
// gsap.from(".page7-div1,.page7-div2,.page7-div3,#longbtm-nav",{
//      scrollTrigger:{
//           trigger:"#page7",
//           scroller:"#main",
//           start:"top 60%",
//        },
//        y:30,
//        duration:2,
//        opacity:0,
//        ease:Expo.easeInOut,
//        stagger:0.2
// })