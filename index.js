


// JavaScript:

const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');

backBtn.addEventListener('mouseover', () => {
  backBtn.classList.add('animate');
});

backBtn.addEventListener('mouseout', () => {
  backBtn.classList.remove('animate');
});

nextBtn.addEventListener('mouseover', () => {
  nextBtn.classList.add('animate');
});

nextBtn.addEventListener('mouseout', () => {
  nextBtn.classList.remove('animate');
});

// This code adds a pulse animation to the buttons when you hover over them. You can customize the animation and styles to fit your needs.

// For the background image, you can add a div element with a background-image property:

/* <div id="background">
  <!-- Your content here -->
// </div> */

// CSS:

// #background {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-image: url('your-image-url');
//   background-size: cover;
//   background-position: center;
//   z-index: -1;
// }

// Replace 'your-image-url' with the URL of your background image.