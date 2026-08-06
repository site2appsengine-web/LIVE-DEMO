
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

        nav.style.background="rgba(0,0,0,.7)";

    }


});





// ===============================
// Test Drive Form
// ===============================


const form = document.getElementById("contactForm");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🚗 Thank you! Your test drive request has been submitted."
    );


    form.reset();


});





// ===============================
// Customer Reviews Slider
// ===============================


const reviews = [


    {
        text:"Best car buying experience with amazing support.",
        name:"- Alex Smith"
    },


    {
        text:"Amazing vehicles and professional dealership team.",
        name:"- Michael Brown"
    },


    {
        text:"The performance and quality exceeded my expectations.",
        name:"- Daniel Wilson"
    },


    {
        text:"Smooth process and excellent customer service.",
        name:"- Emma Davis"
    }


];



let reviewIndex = 0;



const reviewText =
document.getElementById("reviewText");


const reviewName =
document.getElementById("reviewName");




function changeReview(){


    reviewIndex++;


    if(reviewIndex >= reviews.length){

        reviewIndex = 0;

    }



    reviewText.style.opacity="0";

    reviewName.style.opacity="0";



    setTimeout(()=>{


        reviewText.innerText =
        `"${reviews[reviewIndex].text}"`;


        reviewName.innerText =
        reviews[reviewIndex].name;



        reviewText.style.opacity="1";

        reviewName.style.opacity="1";


    },400);


}



setInterval(changeReview,4000);





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
".car-card,.spec,.offer-box,.review-box"
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