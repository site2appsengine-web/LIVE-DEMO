
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
        "0 0 30px rgba(0,255,255,.4)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Tournament Registration
// ===============================


const form =
document.getElementById("contactForm");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🎮 Registration Complete! Welcome to Cyber Arena Tournament."
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
".game-card,.ranking div,.player,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Neon Hover Effect
// ===============================


const cards =
document.querySelectorAll(
".game-card,.ranking div,.player"
);



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.filter =
        "brightness(1.3)";


    });



    card.addEventListener("mouseleave",()=>{


        card.style.filter =
        "brightness(1)";


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
// Hero Glow Animation
// ===============================


const heroTitle =
document.querySelector(".hero-text h1");



let glow = 0;



setInterval(()=>{


    glow++;


    heroTitle.style.textShadow =
    `
    0 0 ${20 + Math.sin(glow)*10}px #ff00ff,
    0 0 ${40 + Math.sin(glow)*15}px #00ffff
    `;


},100);