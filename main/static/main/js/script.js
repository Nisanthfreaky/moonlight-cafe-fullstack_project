// Navbar elements
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open mobile menu
if(menuOpenButton){
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
}

// Close menu button
if(menuCloseButton && menuOpenButton){
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
}

// Close menu when nav link clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(menuOpenButton){
            menuOpenButton.click();
        }
    });
});


// Reservation form
const form = document.getElementById("reservationForm");

if(form){
    form.addEventListener("submit", function(){
        // allow form to submit to Django
        setTimeout(function(){
            alert("Your table has been reserved successfully!");
        },100);
    });
}


// Back To Top Button
let topButton = document.getElementById("topBtn");

if(topButton){
    window.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 200){
            topButton.style.display = "block";
        }else{
            topButton.style.display = "none";
        }
    });
}

// Scroll to top
function topFunction(){
    document.documentElement.scrollTop = 0;
}