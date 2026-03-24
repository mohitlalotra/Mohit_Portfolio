// Scroll Animation using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    } else {
      // Optional: remove 'show' to trigger animation again if desired
      // entry.target.classList.remove('show');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements to animate
  const hiddenElements = document.querySelectorAll('.hidden, .hidden-delay, .hidden-delay-2');
  hiddenElements.forEach((el) => observer.observe(el));
  
  // Example code for when User adds actual image
  // const photoContainer = document.getElementById('profile-photo');
  // photoContainer.style.backgroundImage = "url('YOUR_IMAGE_LINK_HERE')";
  // photoContainer.querySelector('.placeholder-text').style.display = 'none';
});
