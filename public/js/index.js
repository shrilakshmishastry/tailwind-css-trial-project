const menubar = document.querySelector("#barMenu");
const navItems = document.querySelector("#navItem");
menubar.addEventListener('click',()=>{
    console.log("hello");
    if(navItems.classList.contains("hidden")){
        navItems.classList.remove("hidden");
    }
    else{
        navItems.classList.add("hidden");
    }
})
