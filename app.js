// Intro displays letter by letter
var textWrapper = document.querySelector('.ml12');
var scrollToTopBtn = document.getElementById("scrollToTop");
var rootElement = document.documentElement;

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 2000 + 100 * i
  });

  
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);



// logo scales down when scrolling down
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('#logo').removeClass('tiny');
    } else {
        $('#logo').addClass('tiny');
    }
});


// Nav links light up as scrolling past sections
let mainNavLinks = document.querySelectorAll("nav ul li a");;
let mainSections = document.querySelectorAll(".section");

let lastId;
let cur = [];

window.addEventListener("scroll", () => {
   _.throttle(doThatStuff, 100);
});

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + 50;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 50 &&
      section.offsetTop + section.offsetHeight > fromTop + 50 
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// clicking logo takes back up
var logo = document.getElementById("logo");
logo.addEventListener("click", scrollToTop);




