
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

        nav.style.background="rgba(0,0,0,.5)";

    }


});





// ===============================
// Booking Form
// ===============================


const bookingForm = document.getElementById("bookingForm");


bookingForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "🏨 Thank you! Your room booking request has been received."
    );


    bookingForm.reset();


});





// ===============================
// Guest Reviews Slider
// ===============================


const reviews = [


    {
        text:"Amazing hotel with excellent service and luxury rooms.",
        name:"- John Smith"
    },


    {
        text:"Beautiful location and very friendly staff.",
        name:"- Emily Johnson"
    },


    {
        text:"The best hotel experience I have ever had.",
        name:"- David Wilson"
    },


    {
        text:"Premium rooms with outstanding hospitality.",
        name:"- Sophia Brown"
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
".room,.service,.gallery img,.review-box"
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