/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu when clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* =========================================
   CURRENT YEAR
========================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();



/* =========================================
   SCROLL ANIMATION
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});



/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});



/* =========================================
   PROJECT MESSAGE
========================================= */

function showMessage(message) {

    alert(message);

}
