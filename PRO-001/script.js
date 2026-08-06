function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

const reviews = [
{
name:"Ahmed Khan",
text:"Excellent service! We found our dream home within one week."
},
{
name:"Ali Raza",
text:"Professional agents and amazing properties."
},
{
name:"Sara Malik",
text:"Highly recommended. Smooth buying process."
}
];

let index = 0;

setInterval(() => {

index++;

if(index >= reviews.length){
index = 0;
}

document.getElementById("reviewText").innerText =
'"' + reviews[index].text + '"';

document.getElementById("reviewName").innerText =
"- " + reviews[index].name;

},3000);

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! We will contact you soon.");

this.reset();

});