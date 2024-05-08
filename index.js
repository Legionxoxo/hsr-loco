function loading(){
    var tl=gsap.timeline()

tl.to("#yellow1 ",{
    top:"-100%",
    delay:0.4,
    duration:1,
    ease:"expo.out"
})
/* tl.from("#yellow2",{
    top:"-100%",
    delay:0.5,
    duration:1,
    ease:"expo.out" 
},"anim") */
tl.to("#loader h1",{
    color:"black",
    duration:1,
    delay:0.7
},"anim")
tl.to("#loader",{
    display:"none"
})
}

loading();

/* LOCOMOTIVE JS */

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})
var elems=document.querySelectorAll(".elem")
var page2= document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})