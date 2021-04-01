// INTRO displays letter by letter
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


// LOGO scales down when scrolling down
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('#logo').removeClass('tiny');
    } else {
        $('#logo').addClass('tiny');
    }
});


// NAV LINK lights up as scrolling past the section
let mainNavLinks = document.querySelectorAll("nav ul li a");;
let mainSections = document.querySelectorAll(".section");

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


// clicking the LOGO brings to the top of the page
var logo = document.getElementById("logo");
logo.addEventListener("click", scrollToTop);


// Animation 
AOS.init({
    duration: 1200,
})


// MODAL SECTION

// Projects data
const data = [
    {
        id: 0,
        title: "Responsive Portfolio",
        image: "personal_projects/project_screenshots/project_1.png",
        description: "Recreated a portfolio on a provided mockup that look and function well on multiple screen sizes.",
        technologies: "HTML, CSS",
        live: "personal_projects/project_1/index.html",
        github: "https://github.com/gintareauks/Responsive-Layout-Project?"
    },
    {
        id: 1,
        title: "Web App Dashboard",
        image: "personal_projects/project_screenshots/project_2.png",
        description: "This interactive WebApp Dashboard provides a range of traffic-related data to the end-user. The app uses chart.js to display bar, line and pie charts. The site is optimised to provide a top-end user experience across mobile, tablet and desktop platforms. As well as displaying traffic informaton via charts, the app also displays widgets that showcase alerts, the latest user registrations, and comments in a forum. Lastly, the app makes use of localstorage to store the user's preferences for their next visit.",
        technologies: "HTML, CSS/SASS, JavaScript",
        live: "personal_projects/project_2/index.html",
        github: "https://github.com/gintareauks/web_app_dashboard_v3?"
    },
    {
        id: 2,
        title: "Employee Directory",
        image: "personal_projects/project_screenshots/project_3.png",
        description: "Used fetch to request 12 random users from the API. New random employee information displays each time the page refreshes. The directory includes the following: Employee image, first and last name, email and city. Modal window displays the following details: Employee image, name, email, phone number, detailed address and birthday. There is a way to close the modal window. Directory has been styled so that all the major elements are in place. Employees can be filtered by name or username. Functionality has been added to switch back and forth between employees when the detail modal is open.",
        technologies: "HTML, CSS, JavaScript, AJAX",
        live: "personal_projects/project_3/index.html",
        github: "https://github.com/gintareauks/photo_gallery_v5?"
    },
    {
        id: 3,
        title: "Game Show App",
        image: "personal_projects/project_screenshots/project_4.png",
        description: "I created a word guessing game using JavaScript and OOP. A random phrase comes up that players will try to guess by entering different letters into the program. They can miss a letter no more than 5 times to win the game.",
        technologies: "JavaScript, Object-Oriented Programming",
        live: "personal_projects/project_4/index.html",
        github: "https://github.com/gintareauks/oop_game-v2"
    },
    {
        id: 4,
        title: "Responsive Web Form",
        image: "personal_projects/project_screenshots/project_5.png",
        description: "A responsive registration form that shows my layout skills.",
        technologies: "HTML, CSS",
        live: "personal_projects/project_5/index.html",
        github: "https://github.com/gintareauks/online_registration_v4?"
    },
    {
        id: 5,
        title: "Responsive Style Guide",
        image: "personal_projects/project_screenshots/project_6.png",
        description: "Used Sass to add responsive mobile first styles to the supplied index.html file so that it matches the provided mockups when loaded in a browser.",
        technologies: "SASS",
        live: "personal_projects/project_6/index.html",
        github: "https://github.com/gintareauks/style_guide_v7-2?"
    },
    {
        id: 6,
        title: "Interactive Photo Gallery",
        image: "personal_projects/project_screenshots/project_7.png",
        description: "Interactive, searchable gallery of photos made using JavaScript and CSS Grid Layout. At the top of the page, I created a search area where photos hide and show depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox. I also created 'next' and 'previous' arrows to cycle through photos.",
        technologies: "HTML, CSS, JavaScript, Lightbox",
        live: "personal_projects/project_7/index.html",
        github: "https://github.com/gintareauks/employee_directory_v1?"
    },
    {
        id: 7,
        title: "Random Quote Generator",
        image: "personal_projects/project_screenshots/project_8.png",
        description: "Created an app that displays random famous quotes each time a button is clicked. Used JavaScript syntax, variables, loops, conditionals and object literals to build the array of quote objects to store the quotes and wrote my own functions for selecting random quotes from the array and printing them to the screen.",
        technologies: "JavaScript",
        live: "personal_projects/project_8/index.html",
        github: "https://github.com/gintareauks/a_random_quote_generator-v1?"
    },
    {
        id: 8,
        title: "Data Pagination and Filtering",
        image: "personal_projects/project_screenshots/project_9.png",
        description: "Displaying a large amount of data on a web page, like a list of 200 movie titles or 400 products, can overwhelm a user with too much information at once. A common solution is to create separate 'pages' that each display a small portion of the data. In this project, I wrote JavaScript to display several 'pages' of student data that the user can easily navigate and view. Besides pagination, I also added functional search bar. The student data is filtered so that only students whose name includes the search value are shown.",
        technologies: "JavaScript",
        live: "personal_projects/project_9/index.html",
        github: "https://github.com/gintareauks/data-pagination-and-filtering-v1?"
    },
    {
        id: 10,
        title: "Interactive Form",
        image: "personal_projects/project_screenshots/project_10.png",
        description: "Used JavaScript to enhance an interactive registration form for a fictional Full Stack conference. Using the supplied HTML and CSS files, I added my own JavaScript to make the form more user-friendly by: Adding customized and conditional behavior and interactivity; Validating user input and providing helpful error messages when the user enters invalid information into the form fields.",
        technologies: "JavaScript",
        live: "personal_projects/project_10/index.html",
        github: "https://github.com/gintareauks/interactive-form-v3?"
    }
    ];

const modalContainer = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal-project");
const projectButtons = document.querySelectorAll(".project-button");
 

// Close the window if the user clicks outside of the modal window
window.onclick = function (e) {
if (e.target == modalContainer) {
    modalContainer.style.display = "none";
    modalContent.innerHTML = "";
}
};
  

// Project VIEW button opens modal
for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].id
}
  
projectButtons.forEach((button) => {
button.addEventListener("click", (e) => {
    createModal(e.target.id);
});
});
  

// Create MODAL Function
function createModal(index) {
    modalContainer.style.display = "block";
    const content = `
    <div class="modal-img-container">
        <a class="previous">&#8592;</a>
        <img class="modal-image" src=${data[index].image} alt=${"LOVE"}></div>
    <div class="wrap">
        <a class="next">&#8594;</a>
        <h2 class="modal-h2">${data[index].title}</h2>
        <p class="modal-technologies"><em>${data[index].technologies}</em></p>
        <div class="modal-text">
            <p class="modal-description">${data[index].description}</p>
        </div>
        <div class="project-links">

            <a href="${data[index].live}" class="modal-button">LIVE LINK</a>
            <a href="${data[index].github}" class="modal-button">GITHUB REPO</a>
            
            
        </div>
    </div>    
    `;
    modalContent.innerHTML = content;


    // move through projects back and forth
    const previous = document.querySelector('.previous');
    previous.addEventListener('click', e => {
        if (index > 0) {
            index--;
            createModal(index);
        } else {
            index = data.length - 1;
            createModal(index);
        }
    });
        
    const next = document.querySelector('.next');
    next.addEventListener('click', e => {
        if(index < data.length -1) { 
            index++;
            createModal(index);
        } else {
            index = 0;
            createModal(index);
        }
    });
};
  
