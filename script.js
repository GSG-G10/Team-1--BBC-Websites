const navMobile = document.getElementById("nav-mobile");
const ulMobile = document.getElementById("ulMob");
const allNav = document.getElementById("active-nave")

navMobile.onclick = function(){
    ulMobile.classList.toggle("active");
    allNav.classList.toggle("active-nav")
    

}
