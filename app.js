// VARIABLES

const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const panel = document.querySelector(".panel");

// GENERAL

home.addEventListener("click", toggleHome);
projects.addEventListener("click", toggleProjects);
contact.addEventListener("click", toggleContact);

function removeActive() {
  const prev = document.querySelector(".active");
  prev.classList.remove("active");
}

// HOME

function toggleHome() {
  removeActive();
  home.classList.add("active");
}

// PROJECTS

function toggleProjects() {
  removeActive();
  projects.classList.add("active");
}

// CONTACT

function toggleContact() {
  removeActive();
  contact.classList.add("active");
}
