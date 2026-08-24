// ======================================
// BK Clothing Premium JavaScript
// Part 1
// ======================================

// Back To Top Button

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Smooth Scroll

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

console.log("BK Clothing Script Loaded");
// ======================================
// BK Clothing Premium JavaScript
// Part 2
// ======================================

// Add To Cart

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach((button)=>{

button.addEventListener("click",()=>{

button.innerHTML="✔ Added";

button.style.background="#28a745";

setTimeout(()=>{

button.innerHTML="Add to Cart";

button.style.background="#111";

},2000);

});

});

// Newsletter

const newsletterForm=document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thanks for subscribing to BK Clothing!");

newsletterForm.reset();

});

}

// Hero Buttons

const heroBtn=document.querySelector(".btn");

if(heroBtn){

heroBtn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector(".featured").scrollIntoView({

behavior:"smooth"

});

});

}

const exploreBtn=document.querySelector(".btn-outline");

if(exploreBtn){

exploreBtn.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelector(".category").scrollIntoView({

behavior:"smooth"

});

});

}
// ======================================
// BK Clothing Premium JavaScript
// Part 3
// ======================================

// Sticky Header Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// Fade Animation

const items = document.querySelectorAll(
".hero, .features, .category, .featured, .offer-banner, .about, .newsletter"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

items.forEach((item)=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition="all .8s ease";

observer.observe(item);

});

// Footer Year

const copy = document.querySelector(".copyright");

if(copy){

copy.innerHTML = "© " + new Date().getFullYear() + " BK Clothing. All Rights Reserved.";

}

console.log("✅ BK Clothing Premium Website Ready");
