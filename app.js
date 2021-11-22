// VARIABLES
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const quarters = document.querySelectorAll(".quarter");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const audio = document.querySelector("audio");
const equalizer = document.querySelector(".equalizer");
let current = null;
let music = true;

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
  home.innerHTML = '<span>HOME</span><i class="fas fa-home"></i>';
  about.innerHTML = '<span>ABOUT</span><i class="fas fa-user-alt"></i>';
  projects.innerHTML = '<i class="fas fa-folder"></i><span>PROJECTS</span>';
  contact.innerHTML = '<i class="fas fa-phone"></i><span>CONTACT</span>';
  quarters.forEach((q) => {
    q.addEventListener("click", toggle, true);
  });
}

// GENERAL FUNCTIONALITY

function toggle() {
  current = this;
  current.classList.add("focus");
  quarters.forEach((q) => {
    q.removeEventListener("click", toggle, true);
  });
  highlight();
  links[current.id].call();
}

function highlight() {
  wrapper.style.border = "none";
  wrapper.style.boxShadow = "none";
  wrapper.style.width = "500px";
  for (let q of quarters) {
    if (q !== current) {
      q.style.height = "0";
      q.style.zIndex = "-1";
      q.innerHTML = "";
    } else {
      q.style.width = "100%";
      q.style.height = "100%";
      q.style.top = "0";
      q.style.left = "0";
      q.style.borderRadius = "10px";
      q.innerHTML = '<i class="fas fa-times-circle close"></i>';
    }
  }
  const close = document.querySelector(".close");
  close.addEventListener("click", back);
}

function back() {
  current.classList.remove("focus");
  current.style.borderRadius = "0";
  wrapper.style.borderRadius = "400px";
  wrapper.style.width = "400px";
  wrapper.style.boxShadow = "1px 1px 10px 1px cyan";
  document.querySelector(".close").removeEventListener("click", back);
  for (q of quarters) {
    q.style.width = "200px";
    q.style.height = "200px";
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

// HOME PAGE

function showHome() {
  const panel = document.createElement("div");
  panel.className = "home-panel";

  const info = document.createElement("div");
  info.className = "home-info";
  const h1 = document.createElement("h1");
  const p = document.createElement("span");
  h1.innerText = "Deyan Vasilev";
  p.innerHTML = "Software Engineer";

  info.append(h1, p);
  panel.append(info);
  home.append(panel);
  panel.style.opacity = "1";
}

// ABOUT PAGE

function showAbout() {
  const aboutText = document.createElement("div");
  aboutText.innerHTML = `
  <h1>About me</h1>
  <p>
  Hello and thank you for visiting my website! <br> My name is Deyan, 
  I am originally from Bulgaria and have lived in the United States since 2012. <br>
  I have always had an interest in coding and computers and back in late 2020 I 
  decided to pursue my passion full-time. I view coding as the ability to create 
  fun and useful things out of thin air and I see every problem as a puzzle to be
  cracked (I love puzzles). I love learning new technologies and am always working 
  on improving, both as a person and as a developer. I love both Front and Back End Web Development
  and I specialize in JavaScript.
  I am currently looking for opportunities in the Greater St. Louis, Missouri area 
  as well as Illinois and remote.
  </p>
  `;
  aboutText.className = "about-text";

  const aboutSkills = document.createElement("div");
  aboutSkills.innerHTML = `
  <h1>Skills</h1>
  <p>
  <b>Programming Languages:</b> Javascript, Python, SQL <br>
  <b>Front End:</b> HTML, CSS, React.js, Bootstrap, jQuery <br>
  <b>Back End:</b> Node, Express, Flask, SQLAlchemy <br>
  <b>Other:</b> OOP, unittest, RESTful APIs
  </p>
  `;
  aboutSkills.className = "about-skills";

  const btn = document.createElement("div");
  btn.innerText = "SKILLS";
  btn.className = "about-btn";
  btn.id = "me";
  about.append(aboutText, btn, aboutSkills);

  btn.addEventListener("click", function () {
    switchAbout(btn.id);
  });
  btn.addEventListener("mouseover", function () {
    btn.classList.add("jello-vertical");
    btn.classList.add("about-btn-highlight");
  });
  btn.addEventListener("mouseout", function () {
    btn.classList.remove("jello-vertical");
    btn.classList.remove("about-btn-highlight");
  });
}

function switchAbout(arg) {
  const btn = document.querySelector(`#${arg}`);
  if (arg === "me") {
    document.querySelector(".about-text").style.left = "-1000px";
    document.querySelector(".about-skills").style.left = "0";
    btn.innerText = "ABOUT ME";
    btn.id = "skills";
  } else {
    document.querySelector(".about-text").style.left = "0";
    document.querySelector(".about-skills").style.left = "1000px";
    btn.innerText = "SKILLS";
    btn.id = "me";
  }
}

// PROJECTS PAGE

function showProjects() {
  console.log("projects");
}

// CONTACT PAGE

function showContact() {
  const panel = document.createElement("div");

  panel.innerHTML = `
  <h3>Feel free to get in touch with me!</h4>
  <a target="_blank" href="https://www.linkedin.com/in/deyan-vasilev/"><i class="fab fa-linkedin linkedin"></i></a>
  <a target="_blank" href="https://github.com/lemonstener"><i class="fab fa-github github"></i></a>
  <a target="_blank" href="mailto: deyanvasilev7@gmail.com"><i class="fas fa-envelope mail"></i></a>
  `;

  contact.append(panel);
}

function toggleMusic() {
  if (music) {
    audio.pause();
    music = false;
    equalizer.style.filter = "grayscale(100%)";
    equalizer.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audio.play();
    music = true;
    equalizer.style.filter = "grayscale(0)";
    equalizer.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

equalizer.addEventListener("click", toggleMusic);

setInitial();
