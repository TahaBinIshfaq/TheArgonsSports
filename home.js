
// function init(){
    
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("body", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// init();
// var tl =gsap.timeline()
// tl.from("#left #img img,#centre #navbar,#right #btn a button",{
//     y:-80,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.6
// })
// tl.from("#navbar ul li",{
//     y:-80,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.6
// })

// tl.from("#searchbar",{
//     y:40,
//     opacity:0,
//     duration:0.6,
//     delay:0.4,
//     satgger:0.3
// })

// tl.from("#front h1",{
//     scale:2,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     rotate:360,
// })
// tl.from("#frontpara",{
//     x:-400,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
// })
// tl.from("#frontbtn",{
//     x:400,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
// })
// tl.from(".hsale",{
//     scale:2,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     stagger:0.6,
// })
// tl.from("#signitems p ,#signitems button",{
//     scale:2,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     stagger:0.6,
// })
// tl.from(".trendimg",{
//     scale:2,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     stagger:0.6,
// })