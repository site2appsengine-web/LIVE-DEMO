
// ===============================
// Mobile Menu Toggle
// ===============================

function toggleMenu(){

    document.getElementById("menu").classList.toggle("active");

}



// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll",()=>{

    const nav = document.querySelector("nav");


    if(window.scrollY > 80){

        nav.style.background="#111827";

    }
    else{

        nav.style.background="rgba(17,24,39,.85)";

    }

});




// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{

    e.preventDefault();


    alert(
        "✅ Thank you! Your message has been sent successfully."
    );


    form.reset();


});




// ===============================
// Product Buy Buttons
// ===============================

const buyButtons = document.querySelectorAll(
    ".buy-btn"
);


buyButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        alert(
            "🛒 Redirecting you to checkout..."
        );


    });


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
".card,.category,.feature"
)
.forEach(item=>{


    observer.observe(item);


});




// ===============================
// Smooth Close Mobile Menu
// ===============================


const links = document.querySelectorAll("#menu a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        document
        .getElementById("menu")
        .classList.remove("active");


    });


});