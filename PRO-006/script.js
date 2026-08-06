
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
        "0 10px 30px rgba(255,123,156,.25)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Booking Form
// ===============================


const form =
document.getElementById("contactForm");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🐾 Thank you! Your pet care booking request has been received."
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
".service,.gallery img,.about-image,.about-text,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Pet Image Click Effect
// ===============================


const pets =
document.querySelectorAll(".gallery img");



pets.forEach(pet=>{


    pet.addEventListener("click",()=>{


        pet.style.transform =
        "scale(1.08)";



        setTimeout(()=>{


            pet.style.transform =
            "scale(1)";


        },500);


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





// ===============================
// Cute Button Animation
// ===============================


const buttons =
document.querySelectorAll(".btn,form button");



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform =
        "translateY(-5px) scale(1.05)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform =
        "translateY(0) scale(1)";


    });


});