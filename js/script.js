let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search-alt-2");

searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search-alt-2", "bx-x");
    }else{
        searchBox.classList.replace("bx-x", "bx-search-alt-2");
    }
})

// sidebar open and close js code
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
});
menuCloseBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
});

//sidebar sub menu open and close js code
// let option1Arrow = document.querySelector(".option1-arrow");
// option1Arrow. addEventListener("click", ()=>{
//     navLinks.classList.toggle("show1")
// });

// let moreArrow = document.querySelector(".more-arrow");
// moreArrow. addEventListener("click", ()=>{
//     navLinks.classList.toggle("show2")
// });

// let option2Arrow = document.querySelector(".option2-arrow");
// option2Arrow. addEventListener("click", ()=>{
//     navLinks.classList.toggle("show3")
// });