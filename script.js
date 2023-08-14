let topLeftText = document.querySelector(".topLeftText");
let middleText = document.querySelector(".middleText");
let background = document.querySelector(".background");

$(document).ready(function(){
    $(".home").click(function(){
      $(".middleText").load("welcome.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "Welcome to My Portfolio";
    });
});

$(document).ready(function(){
    $(".projects").click(function(){
      $(".middleText").load("resume.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "Past Projects";
    });
});

$(document).ready(function(){
    $(".me").click(function(){
      $(".middleText").load("me.txt").hide().fadeIn('slow');
      topLeftText.innerHTML = "A Bit About Me";
    });
});

let charIndex = 0;
let indexFile = " ";
$.get("index.html", function(response) {
    indexFile = String(response); 

    setTimeout(function(){
        setInterval(function(){
            if (charIndex < indexFile.length) { 
                background.innerHTML += indexFile.charAt(charIndex);
                background.scrollTop += 20;
                charIndex++;
            } else {
                clearInterval();
            }
        }, 50);
    }, 4000);   
});









   
                 
 







