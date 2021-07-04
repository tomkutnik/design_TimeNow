let menuShown = false;
function showMenu(){
    const menu = document.getElementById("navMenu");
    const btn = document.getElementById("navBtn")
    if(menuShown){
        menu.classList.remove("nav__menu-open");
        btn.classList.remove("nav__btn-open");
        menuShown = false;
    }else{
        menu.classList.add("nav__menu-open");
        btn.classList.add("nav__btn-open");
        menuShown = true;
    }
}

function billedOptionChanger(){
    let billedSwitch = document.getElementById("billedSwitch");
    const month = document.getElementById("billedMonthly")
    const year = document.getElementById("billedYearly")

    if(billedSwitch.checked){
        month.classList.remove("price__selectorText-bold");
        year.classList.add("price__selectorText-bold");
    }else{
        year.classList.remove("price__selectorText-bold");
        month.classList.add("price__selectorText-bold");
    }
}