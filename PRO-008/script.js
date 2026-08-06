// ==============================
// Mobile Menu
// ==============================

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// ==============================
// Customer Reviews Slider
// ==============================

const reviews = [
    {
        name: "Ali Khan",
        text: "Amazing food and super fast delivery. Highly recommended!"
    },
    {
        name: "Sara Ahmed",
        text: "Best pasta and pizza in town. The chef is fantastic."
    },
    {
        name: "Usman Raza",
        text: "Fresh ingredients, excellent taste and great customer service."
    },
    {
        name: "Ayesha Malik",
        text: "Beautiful restaurant with delicious food. I will definitely come again."
    }
];

let currentReview = 0;

const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");

function changeReview() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    reviewText.style.opacity = "0";
    reviewName.style.opacity = "0";

    setTimeout(() => {

        reviewText.innerText = `"${reviews[currentReview].text}"`;
        reviewName.innerText = `- ${reviews[currentReview].name}`;

        reviewText.style.opacity = "1";
        reviewName.style.opacity = "1";

    }, 400);

}

setInterval(changeReview, 4000);

// ==============================
// Contact Form
// ==============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();

});

// ==============================
// Navbar Background on Scroll
// ==============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "#111";

    } else {

        nav.style.background = "rgba(0,0,0,.5)";

    }

});

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.feature,.about-img,.about-text")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});