
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
        "0 10px 30px rgba(255,152,0,.25)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Quote Form Submit
// ===============================


const form =
document.getElementById("contactForm");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🏗️ Thank you! Your project quote request has been submitted."
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
".project,.service,.stats div,.testimonial,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Animated Statistics
// ===============================


const counters =
document.querySelectorAll(".stats h2");



counters.forEach(counter=>{


    let target =
    parseInt(counter.innerText);



    let count = 0;



    let update = setInterval(()=>{


        count += Math.ceil(target / 50);



        if(count >= target){

            count = target;

            clearInterval(update);

        }



        counter.innerText =
        count + "+";



    },40);


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
// Button Hover Effect
// ===============================


const buttons =
document.querySelectorAll(".btn,form button");



buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform =
        "scale(1.05)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform =
        "scale(1)";


    });


});