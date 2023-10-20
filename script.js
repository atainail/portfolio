


let upArrow = document.querySelector(".up-arrow");
upArrow.addEventListener("click", function(){
    window.scrollTo({top: 0,  behavior: "smooth"});  
      console.log(window.scrollY)
});

document.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        upArrow.style.display = "block";

    } else {
        upArrow.style.display = "none";
    }
});

let allDivs = document.querySelectorAll("div");

let navigation = document.querySelector(".navigation-container");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

let helloSection = document.querySelector(".hello-container");
let aboutSection = document.querySelector(".about-container");
let skillsSection = document.querySelector(".skills-container");
let projectsSection = document.querySelector(".projects-container");
let contactSection = document.querySelector(".contact-container");

home.addEventListener("click", function(){
    helloSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    menu.style.display = "none";  
    openClose.innerHTML = '<i class="bi bi-list expand"></i>';
});

about.addEventListener("click", function(){
    aboutSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    menu.style.display = "none";  
    openClose.innerHTML = '<i class="bi bi-list expand"></i>';
});

skills.addEventListener("click", function(){
    skillsSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    menu.style.display = "none";  
    openClose.innerHTML = '<i class="bi bi-list expand"></i>';
});

projects.addEventListener("click", function(){
    projectsSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    menu.style.display = "none"; 
    openClose.innerHTML = '<i class="bi bi-list expand"></i>'; 
});

contact.addEventListener("click", function(){
    contactSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    menu.style.display = "none"; 
    openClose.innerHTML = '<i class="bi bi-list expand"></i>'; 
});


// <i class="bi bi-list expand"></i>
//                 <i class="bi bi-x-lg close"></i>  

let openClose = document.querySelector(".open-close");


let menu = document.querySelector(".menu");
openClose.addEventListener("click", function(){

    if(menu.style.display == "flex") {
        openClose.innerHTML = '<i class="bi bi-list expand"></i>';
        menu.style.display = "none";
    } else {      
        openClose.innerHTML = '<i class="bi bi-x-lg close"></i>';
        menu.style.display = "flex";       
    }  
});

// document.querySelector("li:not(.completed):not(.selected)");

let notNavigation = document.querySelector(":not(.navigation-container)");

notNavigation.style.color = 'red';

// notNavigation.addEventListener("click", function(){
//     menu.style.display = "none";    
// });




