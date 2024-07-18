

window.onload = function() {
    const mainContainer = document.querySelector('#main-container');

    
    const backgroundColors = [
        '#6a6c6c',
        'pink',
        'lightblue',
        'lightgreen',
        'lightyellow',
        'lightcoral',
        'yankeesblue'
    ];
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Ensure the menu closes when a link is clicked in mobile view
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Set an interval to change the background color every 2 seconds
    let currentIndex = 0;
    setInterval(() => {
        // Update the background color
        mainContainer.style.backgroundColor = backgroundColors[currentIndex];

        // Increment the index, resetting to 0 when reaching the end
        currentIndex = (currentIndex + 1) % backgroundColors.length;
    }, 2000); // Changes every 2 seconds
};





/*About us */
 document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow img');
    const totalSlides = slides.length;
  
    function showSlides() {
      slides.forEach(slide => {
        slide.style.display = "none";  
      });
      slideIndex++;
      if (slideIndex > totalSlides) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 2000);
    }
  
    showSlides();
  });

  /*Responsive Card*/
  document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  });

















 

  