var navbar = document.getElementById("navbar");
const toggle_nav = ()=>{
    navbar.classList.toggle("hidden");
}

//Close menu is window size increases
window.onresize=()=>{
    let viewportwidth=window.innerWidth;
    if(viewportwidth>1050){
        navbar.classList.add("hidden");
    }
}