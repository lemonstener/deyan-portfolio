// VARIABLES
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const quarters = document.querySelectorAll(".quarter");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
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
  quarters.forEach((q) => {
    q.addEventListener("click", toggle, true);
  });
}

// GENERAL FUNCTIONALITY

function toggle() {
  current = this;
  quarters.forEach((q) => {
    q.removeEventListener("click", toggle, true);
  });
  highlight();
  // links[current].call();
}

function highlight() {
  wrapper.style.border = "none";
  wrapper.style.boxShadow = "none";
  for (let q of quarters) {
    if (q !== current) {
      q.style.width = "0";
      q.style.height = "0";
      q.style.opacity = "0";
      q.style.zIndex = "-1";
      q.innerHTML = "";
    } else {
      q.style.width = "100%";
      q.style.height = "100%";
      q.style.top = "10vh";
      q.style.left = "0";
      q.style.borderRadius = "10px";
      q.innerHTML = '<i class="fas fa-times-circle close"></i>';
    }
  }
  const close = document.querySelector(".close");
  close.addEventListener("click", back);
}

function back() {
  current.style.borderRadius = "0";
  wrapper.style.borderRadius = "400px";
  wrapper.style.boxShadow = "1px 1px 10px 1px cyan";
  document.querySelector(".close").removeEventListener("click", back);
  for (q of quarters) {
    q.style.width = "200px";
    q.style.height = "200px";
    q.style.opacity = "1";
    q.style.zIndex = "1";
  }
  if (current === home) {
    current.style.borderTopLeftRadius = "200px";
    current.style.left = "0";
    current.style.top = "0";
  } else if (current === about) {
    current.style.borderTopRightRadius = "200px";
    current.style.left = "200px";
    current.style.top = 0;
  } else if (current === projects) {
    current.style.borderBottomLeftRadius = "200px";
    current.style.left = 0;
    current.style.top = "200px";
  } else {
    current.style.borderBottomRightRadius = "200px";
    current.style.top = "200px";
    current.style.left = "200px";
  }

  setInitial();
}

function showHome() {}

function showAbout() {}

function showProjects() {}

function showContact() {}

setInitial();
