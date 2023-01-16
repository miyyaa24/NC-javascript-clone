const images = ["0.jpg", '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImage}`;

document.body.appendChild(bgImages);