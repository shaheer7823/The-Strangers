window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
// Example: Code to open a video modal or perform an action when the play button is clicked.
document.querySelector('.play-button').addEventListener('click', function() {
  alert('Play Trailer Clicked!');
  // You can add logic here to open a trailer video or modal.
});
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}
