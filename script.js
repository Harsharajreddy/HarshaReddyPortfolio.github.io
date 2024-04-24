// script.js

const introTexts = [
  "Hi, I'm Harsha!",
  "Welcome to my creative space.",
  "Click here to know more about me"
];

function typeIntroText() {
  const element = document.getElementById('intro-text');
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < introTexts.length - 1) {
      if (charIndex < introTexts[lineIndex].length) {
        element.innerHTML += introTexts[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        // Move to the next line
        lineIndex++;
        charIndex = 0;
        element.innerHTML += '<br>'; // Add line break
        setTimeout(type, 500); // Delay before typing the next line
      }
    }
  }

  type();
}

typeIntroText(); // Call the function to start typing the intro text

document.getElementById('intro-text').style.fontFamily = 'Garamond, serif';

$(".mail-btn").on("click touchstart", function () {
  $(this).addClass("fly");
  that = this
  setTimeout(function() {
      $(that).removeClass("fly");
  }, 5400)
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded event fired"); // Add this line to log a message
  const navbarLinks = document.querySelectorAll('.nav-link');
  
  navbarLinks.forEach(navbarLink => {
      navbarLink.addEventListener('click', smoothScroll);
  });

  function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      const startTime = performance.now();

      function step(currentTime) {
          const elapsedTime = currentTime - startTime;
          window.scrollTo(0, ease(elapsedTime, startPosition, distance, duration));
          if (elapsedTime < duration) {
              requestAnimationFrame(step);
          }
      }

      requestAnimationFrame(step);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }
});

