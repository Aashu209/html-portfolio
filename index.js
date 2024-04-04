
gsap.from(".nav " ,{
    x:800,
    scale:0,
    duration:0.5,
    delay:0.8,
})
gsap.from(".main2 h1 ,.main2 h3",{
    x:-400,
    scale:0,
    delay:0.1,
    scrollTrigger:{
        trigger:".main2",
        scroller: "body",
        end:"bottom 50%",
        start:"top 7%",
        scurb:2
    }
})
gsap.from("#secondsec h1",{
    x:400,
    scale:0,
    color:"Blue",
    delay:0.1,
    duration:0.6,
    scrollTrigger:{
        trigger:"#secondsec",
        scroller:"Body",
        start:"top 50%",
        end:"top 20%",
        scurb:3,
        //markers:true
    }
})
gsap.from(".secondfstdiv div",{
    x:-1000,
    scale:0,
    delay:0.1,
    duration:1,
    scrollTrigger:{
        trigger:".secondfstdiv div",
        scroller:"body",
        rortate:360,
        start:"top 65%",
        end:"top 20%",
        scurb:2,
    }
})
gsap.from("#fourthsec",{
    x:-1000,
    scale:0,
    delay:0.1,
    duration:1,
    scrollTrigger:{
        trigger:"#fourthsec",
        scroller:"body",
        rortate:360,
        start:"top 87%",
        end:"top 20%",
        scurb:2,
        //markers:true
    }
})
