const num=Math.floor(Math.random() * 100);


const l_star=document.querySelector(".l-stars");

// let top;
// let left;
let array=[["10","5","17","49","80","85","50","20","67","2","46","50","54","62","33","26","14","57","77","40","2","90","85"],["55","5","23","68","50","60","54","60","34","8","26","10","4","70","33","86","64","34","17","20","70","90","98"]]

const T=10;
const L=30;

for(let i = 0 ; i <25 ; i++){
    // console.log("hi");
l_star.innerHTML+=` <div class="big-star" style="top: ${array[0][i]}vh;left: ${array[1][i]}vw;"></div>`
}

let text_1=document.querySelector(".text-1");
let text_2=document.querySelector(".text-2");
let text_3=document.querySelector(".text-3");

gsap.fromTo(text_1,{
    y:-50
},{
    y:0,
    delay:.2,
    duration:.3,
    scale:1,
    opacity:1
  
})

gsap.fromTo(text_2,{
    y:-50,
},{
    y:0,
    delay:0.3,
    duration:.3,
    scale:1,
    opacity:1
  
})

gsap.fromTo(text_3,{
    y:-50
},{
    y:0,
    delay:.4,
    duration:.3,
    scale:1,
    opacity:1
  
})




let tl=gsap.timeline({
    repeat:-1,
    repeatDelay:0,
    // yoyo:true,
});
let big=document.querySelectorAll(".big-star")


big.forEach(element => {
    
    
    tl.to(big,{
        duration:2,
        x:8,
        ease:"power1.in"
    }).to(big,{
        duration:1,
        y:4,
        ease:"power.in"
    }).to(big,{
        duration:2,
        y:0,
        ease:"power.in"
    }).to(big,{
        duration:2,
        x:-4,
        ease:"ease-in"
    }).to(big,{
        duration:1,
        x:4,
        ease:"power.in"
    })
});