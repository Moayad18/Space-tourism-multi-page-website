let technologyLis = document.querySelectorAll("main .spans span");
let technologyH1 = document.querySelector("main .text h1");
let technologyp = document.querySelector("main .text p");
let technologyImg = document.querySelector("main img");
let technologyImgMob = document.querySelector("main picture source");
technologyLis.forEach((li) => {
  li.addEventListener("click", function () {
    technologyLis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let lisOne = document.querySelector("main .spans span.one");
lisOne.addEventListener("click", function () {
  technologyH1.textContent = "Launch vehicle";
  technologyp.textContent = `A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`;
  technologyImg.src = "assets/technology/image-launch-vehicle-portrait.jpg";
  technologyImgMob = "assets/technology/image-launch-vehicle-landscape.jpg";
});

let lisTwo = document.querySelector("main .spans span.two");
lisTwo.addEventListener("click", function () {
  technologyH1.textContent = "Space capsule";
  technologyp.textContent = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`;
  technologyImg.src = "assets/technology/image-space-capsule-portrait.jpg";
  technologyImgMob.srcset =
    "assets/technology/image-space-capsule-landscape.jpg";
});
let lisThree = document.querySelector("main .spans span.three");
lisThree.addEventListener("click", function () {
  technologyH1.textContent = "Spaceport";
  technologyp.textContent = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`;
  technologyImg.src = "assets/technology/image-spaceport-portrait.jpg";
  technologyImgMob.srcset = "assets/technology/image-spaceport-landscape.jpg";
});
