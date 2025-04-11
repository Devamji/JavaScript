gsap.to("#page2 img",{
    width: "100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller: "body",
        markers:true,
        start: "top 0",
        end: "top -100%",
        scrub:2,
        pin:true
    }
})

gsap.to("#page3 h1",{
    transform: "translateX(-125%)",
    scrollTrigger:{
        trigger: "#page3",
        scroller:"body",
        markeres : true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})

// gsap.to("#page1 h1",{
//     transform: "translateX(-120%)",
//     scrollTrigger:{
//         trigger: "#page1",
//         scroller:"body",
//         markeres : true,
//         start:"top 0",
//         end:"top -100%",
//         scrub:5,
//         pin:true
//     }
// })