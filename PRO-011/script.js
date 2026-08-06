
// ===============================
// Mobile Menu Toggle
// ===============================

function toggleMenu(){

    document
    .getElementById("menu")
    .classList.toggle("active");

}



// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll",()=>{


    const nav = document.querySelector("nav");


    if(window.scrollY > 80){

        nav.style.background="#050505";

    }
    else{

        nav.style.background="rgba(0,0,0,.45)";

    }


});




// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "✈️ Thank you! Your travel inquiry has been received."
    );


    form.reset();


});




// ===============================
// Scroll Reveal Animation
// ===============================


const observer = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.2
});




document.querySelectorAll(
".feature,.place,.package,.about-image,.about-text"
)
.forEach(element=>{


    observer.observe(element);


});




// ===============================
// Close Mobile Menu After Click
// ===============================

const menuLinks = document.querySelectorAll("#menu a");


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        document
        .getElementById("menu")
        .classList.remove("active");


    });


});