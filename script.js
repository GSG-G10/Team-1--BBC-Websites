let navMobile = document.getElementById("nav-mobile");
let ulMobile = document.getElementById("ulMob");
let allNav = document.getElementById("active-nave")

navMobile.onclick = function(){
    ulMobile.classList.toggle("active");
    allNav.classList.toggle("active-nav")
    

}
