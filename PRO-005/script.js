
// ===============================
// Mobile Menu Toggle
// ===============================

function toggleMenu(){

    document
    .getElementById("menu")
    .classList.toggle("active");

}





// ===============================
// Navbar Luxury Effect
// ===============================


window.addEventListener("scroll",()=>{


    const nav = document.querySelector("nav");


    if(window.scrollY > 80){

        nav.style.boxShadow =
        "0 10px 35px rgba(212,175,55,.25)";

    }

    else{

        nav.style.boxShadow =
        "none";

    }


});





// ===============================
// Consultation Form
// ===============================


const form =
document.getElementById("contactForm");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "💎 Thank you! Our jewelry expert will contact you soon."
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
".product,.features div,.review-box,form"
)
.forEach(element=>{


    observer.observe(element);


});





// ===============================
// Customer Reviews Slider
// ===============================


const reviews = [

{
text:
"Beautiful designs and amazing quality.",
name:
"- Sarah"
},

{
text:
"The diamond collection feels truly luxurious.",
name:
"- Michael"
},

{
text:
"Excellent craftsmanship and premium service.",
name:
"- Emily"
}

];



let reviewIndex = 0;



setInterval(()=>{


    reviewIndex++;


    if(reviewIndex >= reviews.length){

        reviewIndex = 0;

    }



    document
    .getElementById("reviewText")
    .innerText =
    '"' + reviews[reviewIndex].text + '"';



    document
    .getElementById("reviewName")
    .innerText =
    reviews[reviewIndex].name;



},3000);





// ===============================
// Product Hover Shine Effect
// ===============================


const products =
document.querySelectorAll(".product");



products.forEach(product=>{


    product.addEventListener("mouseenter",()=>{


        product.style.filter =
        "brightness(1.2)";


    });



    product.addEventListener("mouseleave",()=>{


        product.style.filter =
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