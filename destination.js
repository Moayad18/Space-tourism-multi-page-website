let destinationImage = document.querySelector("main .image img");
let destinationH1 = document.querySelector("main div.moon h1");
let destinationText = document.querySelector("main .moon p.text");

let destinationSpanFirst = document.querySelector(
  "main .moon aside p:first-child span"
);
let destinationSpanLast = document.querySelector(
  "main .moon aside p:last-child span"
);

// Destination Page
let ulLis = document.querySelectorAll(".moon ul li");
ulLis.forEach((li) => {
  li.addEventListener("click", function () {
    ulLis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let moon = document.querySelector("ul li.mon");
moon.addEventListener("click", () => {
  destinationImage.src = "assets/destination/image-moon.png";

  destinationH1.textContent = "moon";

  destinationText.textContent = ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`;

  destinationSpanFirst.textContent = "384,400 km";
  destinationSpanLast.textContent = "3 days";
});
let mars = document.querySelector("ul li.mars");
mars.addEventListener("click", () => {
  destinationImage.src = "assets/destination/image-mars.png";

  destinationH1.textContent = "mars";

  destinationText.textContent = `Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!`;

  destinationSpanFirst.textContent = "225 mil.km";
  destinationSpanLast.textContent = "9 months";
});
let europa = document.querySelector("ul li.europa");
europa.addEventListener("click", () => {
  destinationImage.src = "assets/destination/image-europa.png";

  destinationH1.textContent = "europa";

  destinationText.textContent = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`;

  destinationSpanFirst.textContent = "  628 mil. km";
  destinationSpanLast.textContent = "3 years";
});
let titan = document.querySelector("ul li.titan");
titan.addEventListener("click", () => {
  destinationImage.src = "assets/destination/image-titan.png";

  destinationH1.textContent = "titan";

  destinationText.textContent = `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`;

  destinationSpanFirst.textContent = "1.6 bil. km";
  destinationSpanLast.textContent = "7 Years";
});
