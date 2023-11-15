let isScrolled = false

//el mas gei
function scrollnav(){
    // diego gei funcion normal
}

let navscroll = () =>{
    let header= document.getElementsByClassName("navbar")
    if (window.scrollY>0){
        header.classList.add("navscroll")
    }
}

window.addEventListener("scroll", () => {
    let header= document.querySelector("nav") 
    header.classList.toggle("navscroll", window.scrollY>0)
})

