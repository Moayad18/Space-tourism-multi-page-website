let crewLis = document.querySelectorAll("main aside ul li");
let crewSpan = document.querySelector("main aside span");
let crewH1 = document.querySelector("main aside h1");
let crewP = document.querySelector("main aside p");
let crewImg = document.querySelector("main .image img");
crewLis.forEach((li) => {
  li.addEventListener("click", function () {
    crewLis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let anousheh = document.querySelector("main aside ul li.anousheh");
anousheh.addEventListener("click", function () {
  crewSpan.textContent = "Flight Engineer";
  crewH1.textContent = "Anousheh Ansari";
  crewP.textContent = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
   Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, 
   and the first Iranian in space.`;
  crewImg.src = "assets/crew/image-anousheh-ansari.png";
});

let mark = document.querySelector("main aside ul li.mark");
mark.addEventListener("click", function () {
  crewSpan.textContent = "Mission Specialist";
  crewH1.textContent = "Mark Richard";
  crewP.textContent = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`;
  crewImg.src = "assets/crew/image-mark-shuttleworth.png";
});

let victor = document.querySelector("main aside ul li.victor");
victor.addEventListener("click", function () {
  crewSpan.textContent = "Pilot";
  crewH1.textContent = "Victor Glover";
  crewP.textContent = `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer.`;
  crewImg.src = "assets/crew/image-victor-glover.png";
});

let douglas = document.querySelector("main aside ul li.douglas");
douglas.addEventListener("click", function () {
  crewSpan.textContent = "Commander";
  crewH1.textContent = "Douglas Hurley";
  crewP.textContent = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`;
  crewImg.src = "assets/crew/image-douglas-hurley.png";
});
