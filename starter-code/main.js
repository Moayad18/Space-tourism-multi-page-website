let menu = document.querySelector("header img.menu");
let closed = document.querySelector("header img.close");
let headerOl = document.querySelector("header ol");
let explore = document.querySelector("main > span.explore");
// Main Page
let lis = document.querySelectorAll("header ol li");
lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let home = document.querySelector("header ol li.home");
home.addEventListener("click", () => {
  window.location.href = "index.html";
});

let destination = document.querySelector("header ol li.destination");
destination.addEventListener("click", () => {
  window.location.href = "destination.html";
});

let crew = document.querySelector("header ol li.crew");
crew.addEventListener("click", () => {
  window.location.href = "crew.html";
});
let technology = document.querySelector("header ol li.technology");
technology.addEventListener("click", () => {
  window.location.href = "technology.html";
});

menu.addEventListener("click", function () {
  headerOl.style.display = "flex";
  menu.style.display = "none";
  closed.style.display = "block";
});

closed.addEventListener("click", function () {
  headerOl.style.display = "none";
  menu.style.display = "block";
  closed.style.display = "none";
});
