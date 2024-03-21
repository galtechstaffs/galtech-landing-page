window.addEventListener("scroll", function () {
  var scroll = window.pageYOffset;

  if (scroll >= 100) {
    document.body.classList.add("scroll-start");
  } else {
    document.body.classList.remove("scroll-start");
  }
});

// var navLinks = document.querySelectorAll('.nav-items');
// window.addEventListener('scroll', function () {
//     navLinks.forEach(function (link) {
//         var targetId = link.getAttribute('href').substring(1);
//         var targetSection = document.getElementById(targetId);
//         var rect = targetSection.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 0) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// });

document
  .querySelector(".each-accordionbox:first-child")
  .classList.add("active");
document.querySelector(
  ".each-accordionbox:first-child .each-text"
).style.display = "flex";
document.querySelectorAll(".each-title").forEach(function (title) {
  title.addEventListener("click", function () {
    var accordionBox = this.parentNode;
    var accordionText = this.nextElementSibling;

    if (accordionBox.classList.contains("active")) {
      accordionText.style.display = "none";
      accordionBox.classList.remove("active");
    } else {
      document.querySelectorAll(".each-text").forEach(function (text) {
        text.style.display = "none";
      });
      document.querySelectorAll(".each-accordionbox").forEach(function (box) {
        box.classList.remove("active");
      });
      accordionBox.classList.add("active");
      accordionText.style.display = "flex";
    }
  });
});

// Select all elements with the class "btn-modal" and add a click event listener to each one
document.querySelectorAll(".btn-modal").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var body = document.body;

    // Toggle the class "open" on the body element
    body.classList.toggle("open");
  });
});

document
  .querySelector(".close-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.body.classList.remove("open");
  });

  
  document.querySelectorAll(".btn-modal2").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = document.body;
  
      // Toggle the class "open" on the body element
      body.classList.toggle("open2");
    });
  });
  
  document
    .querySelector(".close-btn2")
    .addEventListener("click", function (event) {
      event.preventDefault();
  
      document.body.classList.remove("open2");
    });


    
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 990) {
    var textContainers = document.querySelectorAll(".textContainer");
    var viewMoreBtns = document.querySelectorAll(".viewMoreBtn");

    textContainers.forEach(function (textContainer, index) {
      textContainer.style.maxHeight = "125px"; // Initialize the max height

      viewMoreBtns[index].addEventListener("click", function () {
        if (textContainer.style.maxHeight) {
          textContainer.style.maxHeight = null;
          viewMoreBtns[index].textContent = "Read Less";
        } else {
          textContainer.style.maxHeight = "125px";
          viewMoreBtns[index].textContent = "Read More";
        }
      });
    });
  }

  document.querySelector(".switch").addEventListener("click", function () {
    toggleMenuFunction();
  });


  function toggleMenuFunction() {
    var body = document.querySelector(".body");
    body.classList.toggle("light");

    var isDarkModeEnabled = body.classList.contains("light");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
  }
  function initializeDarkMode() {
    var isDarkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled"));
    if (isDarkModeEnabled) {
      document.querySelector(".body").classList.add("light");
    }
  }

  window.onload = initializeDarkMode;
});


document.querySelectorAll('.nav-items').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = targetElement.offsetTop - 50;
            window.scrollTo({
                top: offset,
                behavior: 'smooth' // Smooth scroll behavior
            });
        }
    });
});
