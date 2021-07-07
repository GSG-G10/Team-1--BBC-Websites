// const navBar = document.querySelector(".header-nav");
// const sectionMain = document.querySelector(".section-main");


// const sectionOneOptions = {
//     roorMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver){
//     entries.forEach( (entry) => {
//         if (!entry.isIntersecting) {
//             navBar.classList.add("nav-scrolled")
//         } else {
//             navBar.classList.remove("nav-scrolled")
//         }

//     })
// }, sectionOneOptions)

let navMobile = document.getElementById("nav-mobile");
let ulMobile = document.getElementById("ulMob");
let allNav = document.getElementById("active-nave")

navMobile.onclick = function(){
    ulMobile.classList.toggle("active");
    allNav.classList.toggle("active-nav")
    

}
