
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

        nav.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.15)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Consultation Form
// ===============================


const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🏠 Thank you! Your interior design consultation request has been received."
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
".project,.before,.after,.about-image,.about-text,.process div,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Close Mobile Menu
// ===============================


document
.querySelectorAll("#menu a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        document
        .getElementById("menu")
        .classList.remove("active");


    });


});





// ===============================
// Image Hover Animation
// ===============================


const projectImages =
document.querySelectorAll(".project img");



projectImages.forEach(img=>{


    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });



    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });


});