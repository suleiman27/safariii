console.log("JS file connected successfully!");

// Example slide show logic (optional)
let slideImages = ["images/image1.jpeg", "images/image5.jpeg", "images/image6.jpeg"];
let i = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url('${slideImages[i]}')`;
  i = (i + 1) % slideImages.length;
}, 6000);
