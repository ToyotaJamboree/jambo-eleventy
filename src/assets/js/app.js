


// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("topnav");
    console.log("scrolling");
    if(navbar!=null){
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("sticky-top");
        } else {
            navbar.classList.remove("sticky-top");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})