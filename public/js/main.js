const num = Math.floor(Math.random() * 100);


const l_star = document.querySelector(".l-stars");



let array2 = [["60", "80", "80", "20", "87", "49", "90", "85", "55", "99", "27", "8", "40", "50", "54", "62", "33", "26", "14", "5", "77", "40", "2", "90", "45", "81", "10", "29", "40", "43", "90", "25", "73", "30", "55", "15", "57", "5", "33", "86", "62", "31", "10", "25", "73", "99", "34", "41", "77", "58", "98", "11", "81", "75", "80", "18", "63", "58", "51", "85", "90", "33", "25", "5", "7", "34", "90", "45", "81", "1", "5", "55", "30", "75", "25", "5", "55", "5", "23", "55", "15", "57", "50", "60", "54", "60", "34", "78", "26", "86", "62", "31", "10", "25", "55", "15", "17", "25", "8", "63", "58", "57", "85", "90", "33", "5", "54", "60", "34", "36", "19", "30", "65", "100", "44", "81", "57", "28", "12", "3", "57", "38", "23"]

    , ["25", "5", "55", "5", "6", "52", "74", "95", "64", "37", "44", "21", "6", "25", "55", "5", "23", "34", "78", "23", "68", "34", "78", "86", "62", "31", "10", "26", "70", "33", "86", "62", "31", "86", "62", "31", "10", "25", "73", "99", "98", "11", "81", "75", "80", "18", "63", "58", "51", "85", "90", "33", "25", "5", , "50", "25", "73", "99", "98", "61", "81", "75", "25", "5", "55", "5", "23", "55", "45", "57", "50", "60", "54", "60", "34", "78", "56", , "86", "62", "31", "10", "25", "73", "10", "4", "70", "5", "60", "54", "60", "90", "45", "81", "10", "34", "78", "15", "57", "5", "8", "63", "15", "57", "85", "90", "33", "25", "34", "78", "28", "78", "63", "100", "34", "41", "77", "58", "22", "83", "17", "38", "53"]]

const T2 = 10;
const L2 = 30;
console.log(array2[1].length);
for (let i = 0; i <= array2[0].length; i++) {
    l_star.innerHTML += ` <div class="small-star" style="top: ${array2[0][i]}vh;left: ${array2[1][i]}vw;"></div>`
}



let array = [["60", "80", "10", "80", "5", "55", "58", "57", "85", "90", "33", "25", "5", "85", "50", "20", "73", "2", "46", "50", "54", "62", "33", "26", "14", "57", "90", "33", "55", "15", "35", "2", "85", "51", "29", "40", "43", "90", "65", "10", "10", "15", "19", "75", "70", "20", "50"],

["25", "75", "79", "75", "73", "54", "60", "24", "8", "26", "10", "4", "70", "33", "86", "64", "31", "2", "98", "61", "51", "18", "13", "58", "57", , "85", "90", "33", "25", "5", "17", "75", "51", "29", "80", "73", "90", "70", "34", "55", "15", "20", "5", "50", "55", "47"]]

const T = 10;
const L = 30;
console.log(array[1].length);
for (let i = 0; i <= array[0].length; i++) {
    // console.log("hi");
    l_star.innerHTML += ` <div class="big-star" style="top: ${array[0][i]}vh;left: ${array[1][i]}vw;"></div>`
}










let text_1 = document.querySelector(".text-1");
let text_2 = document.querySelector(".text-2");
let text_3 = document.querySelector(".text-3");

gsap.fromTo(text_1, {
    y: -50
}, {
    y: 0,
    delay: .2,
    duration: .3,
    scale: 1,
    opacity: 1

})

gsap.fromTo(text_2, {
    y: -50,
}, {
    y: 0,
    delay: 0.3,
    duration: .3,
    scale: 1,
    opacity: 1

})

gsap.fromTo(text_3, {
    y: -50
}, {
    y: 0,
    delay: .4,
    duration: .3,
    scale: 1,
    opacity: 1

})




// let tl=gsap.timeline({
//     repeat:-1,
//     repeatDelay:0,
//     // yoyo:true,
// });
// let big=document.querySelectorAll(".big-star")


// big.forEach(element => {

//     tl.to(big,{
//         duration:2.5,
//         x:7,
//         ease:"power.in"
//     }).to(big,{
//         duration:1,
//         y:4,
//         ease:"power.in"
//     }).to(big,{
//         duration:2,
//         y:0,
//         ease:"power.in"
//     }).to(big,{
//         duration:2,
//         x:5,
//         ease:"power.in"
//     }).to(big,{
//         delay:.5,
//         duration:2,
//         x:0,
//         ease:"power.in"
//     })

// });

let heading1 = document.querySelector(".text :nth-child(1)");
let heading2 = document.querySelector(".text :nth-child(3)");


let tl2 = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    // yoyo:true,
});
let tl3 = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    // yoyo:true,
});




tl2.to(heading1, {
    duration: 2,
    x: 6,
    ease: "power1.in"
}).to(heading1, {
    delay: .5,
    duration: 2,
    x: -3,
    ease: "power-in"
}).to(heading1, {
    duration: 1,
    x: -4,
    ease: "power.in"
}).to(heading1, {
    delay: .5,
    duration: 2,
    x: 0,
    ease: "power.in"
})

tl3.to(heading2, {
    duration: 2,
    x: 4,
    ease: "power1.in"
}).to(heading2, {
    delay: .5,
    duration: 3,
    x: -3,
    ease: "power-in"
}).to(heading2, {
    duration: 1,
    x: -4,
    ease: "power.in"
}).to(heading2, {
    delay: .5,
    duration: 2,
    x: 0,
    ease: "power.in"
})

