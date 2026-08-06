
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

        nav.style.background="#000";

    }

    else{

        nav.style.background="rgba(0,0,0,.8)";

    }


});





// ===============================
// Contact Form
// ===============================


const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "📸 Thank you! Your photography request has been submitted."
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
".gallery img,.about-image,.about-text,.service,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Gallery Image Click Effect
// ===============================


const images =
document.querySelectorAll(".gallery img");



images.forEach(image=>{


    image.addEventListener("click",()=>{


        image.classList.toggle("zoom");


    });


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