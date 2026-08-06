
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
        "0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Strategy Form
// ===============================


const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🚀 Thank you! Your growth strategy request has been submitted."
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
".service,.metric,.member,.glass-card,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Chart Animation
// ===============================


const bars =
document.querySelectorAll(".chart div");



bars.forEach((bar)=>{


    let height =
    bar.style.height;


    bar.style.height="0";



    setTimeout(()=>{


        bar.style.transition="1s";

        bar.style.height=height;


    },500);


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