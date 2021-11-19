// VARIABLES
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const quarters = document.querySelectorAll(".quarter");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

const qArr = ["home", "about", "projects", "contact"];
let current = null;

const links = {
  home: {
    call: function () {
      showHome();
    },
  },
  about: {
    call: function () {
      showAbout();
    },
  },
  projects: {
    call: function () {
      showProjects();
    },
  },
  contact: {
    call: function () {
      showContact();
    },
  },
};

// INITIAL

function setInitial() {
  home.innerHTML = '<p>HOME</p><i class="fas fa-home"></i>';
  about.innerHTML = '<p>ABOUT</p><i class="fas fa-user-alt"></i>';
  projects.innerHTML = '<i class="fas fa-folder"></i><p>PROJECTS</p>';
  contact.innerHTML = '<i class="fas fa-phone"></i><p>CONTACT</p>';
}

// GENERAL FUNCTIONALITY

function toggle(slice) {
  console.log(slice.tagName);
  slice.tagName === "DIV"
    ? (current = slice.id)
    : (current = slice.parentElement.id);
  highlight(current);
  links[current].call();
}

function back() {
  wrapper.style.borderRadius = "400px";
  wrapper.style.boxShadow = "1px 1px 10px 1px cyan";
  for (let slice of quarters) {
    slice.style.width = "200px";
    slice.style.height = "200px";
    slice.style.opacity = "1";
    slice.style.zIndex = "1";
    slice.style.borderRadius = "0";
    if (slice.id === "home") {
      slice.style.borderTopLeftRadius = "200px";
      slice.style.left = "0";
      slice.style.top = "0";
    } else if (slice.id === "about") {
      slice.style.borderTopRightRadius = "200px";
      slice.style.left = "200px";
      slice.style.top = 0;
    } else if (slice.id === "projects") {
      slice.style.borderBottomLeftRadius = "200px";
      slice.style.left = 0;
      slice.style.top = "200px";
    } else {
      slice.style.borderBottomRightRadius = "200px";
      slice.style.top = "200px";
      slice.style.left = "200px";
    }
  }
  setInitial();
}

// EVENT LISTENERS

wrapper.addEventListener("click", function (e) {
  toggle(e.target);
});

function highlight() {
  wrapper.style.border = "none";
  wrapper.style.boxShadow = "none";
  for (let q of qArr) {
    const slice = document.querySelector(`#${q}`);
    if (q !== current) {
      slice.style.width = "0";
      slice.style.height = "0";
      slice.style.opacity = "0";
      slice.style.zIndex = "-1";
    } else {
      slice.style.width = "100%";
      slice.style.height = "100%";
      slice.style.top = "10vh";
      slice.style.left = "0";
      slice.style.borderRadius = "10px";
      slice.innerHTML = '<i class="fas fa-times-circle close"></i>';
    }
  }
  const close = document.querySelector(".close");
  close.addEventListener("click", back);
}

function showHome() {}

function showAbout() {}

function showProjects() {}

function showContact() {}

setInitial();
