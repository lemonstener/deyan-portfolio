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
let music = false;

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

const pages = {
  thai: {
    info: "Official website",
    img: "thai-img.jpeg",
    title: "Thai Sport Bodyworks™",
    html: `
    <h2>Thai Sport Bodyworks™ Official Website</h2>
    <b style='color:gold;'>Webflow, HTML, CSS, JavaScript</b> <br>
    <p>
    Thai Sport Bodyworks™ is San Diego's premier massage/sports therapy center. 
    I am currently hard at work on the complete UI overhaul of their official website which 
    serves 18,000+ active customers. In this role I do pretty much everything - bringing concepts 
    to life from design to implementation, refactoring pre-exisitng code, ensuring mobile 
    responsiveness and cross-browser compatibility, handling blog functionality 
    through a Content Management System, as well as improving Search Engine Optimization.
    </p>
    <p>
    Deployed version (work in progress): <a style='color:gold;' target="_blank" href="https://thai-sport-main-website.webflow.io/">HERE</a>
    </p>
    <div class="projects-back"><i class="fas fa-angle-double-down"></i></div>
    `,
  },
  mixer: {
    info: "A single page, Full-stack cocktail mixology application",
    img: "mixer-img.png",
    title: "Mixer",
    html: `
    <h2>Mixer</h2>
    <b style='color:gold;'>React.js, Node.js, Express.js, PostgreSQL, Jest</b>
    <p>
    Mixer is a Full-stack cocktail mixology application that allows users to browse
    various cocktails and ingredients as well as adding cocktails to a favorite page. 
    </p>
    <p>Cocktail and ingredient data comes from MixerDB, 
    an API which I built for the purposes of this project. 
    Database features over 1000 cocktails and ingredients.</p>
    <p>
    Mixer on GitHub: <a style='color:gold;' target="_blank" href="https://github.com/lemonstener/mixer-frontend">HERE</a> <br>
    Deployed version: <a style='color:gold;' target="_blank" href="https://mixerdb.netlify.app">HERE</a>
    </p>
    <div class="projects-back"><i class="fas fa-angle-double-down"></i></div>
    `,
  },
  hearth: {
    info: "A Full-stack, deck-building application for the digital card game Hearthstone",
    img: "hearth-img.png",
    title: "The Forge",
    html: `
    <h2>The Forge</h2>
    <b style='color:gold;'>JavaScript, Python 3, Flask, SQLAlchemy</b>
    <p>
    The Forge is a Full-stack, deck-building application for the digital card game 
    Hearthstone. Users can create decks, edit them, favorite decks made by other users, 
    and browse general information about the cards.
    </p>
    <p>
    For this project I decided to give myself an additional challenge by attempting to make this into 
    a single page application using only vanilla JavaScript (lol).
    </p>
    <p>Card data comes from my own database, which I built for the purposes of this project 
    and it features over 2000 cards.</p>
    <p>
    The Forge on GitHub: <a style='color:gold;' target="_blank" href="https://github.com/lemonstener/hearthstone-forge">HERE</a> <br>
    Deployed version: <a style='color:gold;' target="_blank" href="https://hearthstone-forge.herokuapp.com/">HERE</a>
    </p>
    <div class="projects-back"><i class="fas fa-angle-double-down"></i></div>
    `,
  },
  frog: {
    info: "A browser-based game built in 7 days, hackathon winner ",
    img: "frog-img.png",
    title: "Frog Feast",
    html: `
    <h2>Frog Feast</h2>
    <b style='color:gold;'>JavaScript, HTML, CSS</b>
    <p>Frog Feast is a browser-based game where you are a frog, eating bugs for a high score. 
    Press the left and right arrow on the keyboard (or tap the left or right side of the screen on mobile) 
    to extend your tongue at the desired direction and eat those delicious bugs. Don't eat the bees!</p>
    <p>This Front-end only project was built in 7 days for a hackathon hosted by Mintbean and it 
    earned the Mintbean Star Award for "exemplary achievement in the field of web development".
    <p>
    Hackathon results <a target="_blank" style='color:gold;' href="https://hire.mintbean.io/">HERE</a> <br>
    Frog Feast on GitHub: <a target="_blank" style='color:gold;' href="https://github.com/lemonstener/frog-feast">HERE</a> <br>
    Deployed version: <a target="_blank" style='color:gold;' href="https://lemonstener.github.io/frog-feast/">HERE</a>
    </p>
    <div class="projects-back"><i class="fas fa-angle-double-down"></i></div>
    `,
  },
  jobly: {
    info: "A single page, Full-stack, job searching application",
    img: "jobly-img.png",
    title: "Jobly",
    html: `
    <h2>Jobly</h2>
    <b style='color:gold;'>React.js, Node.js, Express.js, PostgreSQL</b>
    <p>Jobly is a Full-stack, mock job-searching application where users can search and 
    "apply" for positions listed by fictional companies. 
    <p>You'll need an account so either create one or use this one: <br>
    username: "testuser" <br>
    password: "password"</p>

    Jobly on GitHub: <a target="_blank" style='color:gold;' href="https://github.com/lemonstener/jobly-front-end">HERE</a><br>
    Deployed version: <a target="_blank" style='color:gold;' href="https://chunky-tent.surge.sh/">HERE</a>
    </p>
    <div class="projects-back"><i class="fas fa-angle-double-down"></i></div>`,
  },
};

// INITIAL

function setInitial() {
  home.innerHTML = '<span>HOME</span><i class="fas fa-home"></i>';
  about.innerHTML = '<span>ABOUT</span><i class="fas fa-user-alt"></i>';
  projects.innerHTML = '<i class="fas fa-folder"></i><span>PROJECTS</span>';
  projects.style.backgroundImage = "none";
  contact.innerHTML = '<i class="fas fa-phone"></i><span>CONTACT & CV</span>';
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
  <h2>About me</h2>
  <p>
  Hello World! My name is Deyan and I am Full-stack Software Engineer who started his journey into 
  the field back in late 2020. Since then I have gained invaluable experience from professional work, 
  a coding bootcamp, online courses, hackathons, and rigorous self-teaching. <br>
  Tackling complex problems and being able to express your creative side is what always drew me 
  to this industry ever since I was a kid. <br>
  Currently, I am working part-time as a Web Developer for Thai Sport Group Inc., but I am still on the 
  lookout for that first full-time position as either a Full-stack, Front-end, or Back-end engineer. <br>
  So feel free to browse the projects I have listed here, as well as my GitHub, and if you like what you see 
  then don't hesitate to reach out to me! 
  </p>
  `;
  aboutText.className = "about-text";

  const aboutSkills = document.createElement("div");
  aboutSkills.innerHTML = `
  <h2>Skills</h2>
  <p>
  <b>Languages:</b> JavaScript, HTML, CSS, SQL, Python, Java <br>
  <b>Frameworks:</b> React.js, Node.js, Express.js, Flask, SQLAlchemy, Bootstrap, jQuery <br>
  <b>Tools:</b> Git, GitHub, PostgreSQL, MySQL, Webflow <br>
  <b>Other:</b> OOP, MVC, RESTful APIs, Unit Testing <br>
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
    document.querySelector(".about-skills").style.left = "10%";
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
  try {
    projects.children[1].remove();
  } catch (error) {
    console.log("Nothing to delete");
  }
  const panel = document.createElement("div");
  const thai = document.createElement("div");
  const mixer = document.createElement("div");
  const hearth = document.createElement("div");
  const frog = document.createElement("div");
  const job = document.createElement("div");
  const title = document.createElement("div");
  const info = document.createElement("div");

  panel.className = "projects-panel";
  info.className = "projects-info";
  info.style.opacity = "0";
  info.style.backgroundColor = "black";
  info.style.backgroundColor = "rgba(0,0,0,.9)";
  info.style.padding = "2px";
  title.className = "projects-title";
  title.style.opacity = "0";
  title.style.backgroundColor = "rgba(0,0,0,.9)";
  title.style.width = "60%";
  title.style.padding = "2px";
  title.style.borderRadius = "10px";
  thai.id = "thai";
  mixer.id = "mixer";
  hearth.id = "hearth";
  frog.id = "frog";
  job.id = "jobly";
  [thai, mixer, hearth, frog, job].forEach((x) => {
    x.className = "thumb";
    x.addEventListener("mouseover", toggleBackground);
    x.addEventListener("mouseout", resetBackground);
    x.addEventListener("click", showcaseProject);
  });

  const showcase = document.createElement("div");
  showcase.className = "projects-showcase";

  panel.append(title, thai, mixer, frog, hearth, job, info, showcase);
  projects.append(panel);
}

function toggleBackground() {
  const info = document.querySelector(".projects-info");
  const title = document.querySelector(".projects-title");
  title.innerText = `${pages[this.id].title}`;
  title.style.opacity = "1";
  info.innerText = `${pages[this.id].info}`;
  info.style.opacity = "1";
  projects.style.backgroundImage = `url(${pages[this.id].img})`;
}

function resetBackground() {
  document.querySelector(".projects-info").style.opacity = "0";
  document.querySelector(".projects-title").style.opacity = "0";
  projects.style.backgroundImage = "none";
}

function showcaseProject() {
  document.querySelectorAll(".thumb").forEach((t) => {
    t.remove();
  });
  document.querySelector(".projects-title").remove();
  document.querySelector(".projects-info").remove();
  const panel = document.querySelector(".projects-panel");
  projects.style.backgroundImage = `url(${pages[this.id].img})`;
  const showcase = document.querySelector(".projects-showcase");
  showcase.style.top = "0";

  const text = document.createElement("div");
  text.className = "projects-page";
  text.innerHTML = pages[this.id].html;
  showcase.append(text);

  const btn = document.querySelector(".projects-back");

  btn.addEventListener("click", function () {
    showcase.style.top = "1000px";
    setTimeout(function () {
      showProjects();
    }, 200);
  });
  btn.addEventListener("mouseover", function () {
    btn.classList.add("projects-back-highlight");
  });
  btn.addEventListener("mouseout", function () {
    btn.classList.remove("projects-back-highlight");
  });
}

// CONTACT PAGE

function showContact() {
  const panel = document.createElement("div");

  panel.innerHTML = `
  <h3>Feel free to get in touch with me!</h4>
  <a target="_blank" href="https://www.linkedin.com/in/deyan-vasilev/"><i class="fab fa-linkedin linkedin"></i></a>
  <a target="_blank" href="https://github.com/lemonstener"><i class="fab fa-github github"></i></a>
  <a target="_blank" href="mailto: deyanvasilev7@gmail.com"><i class="fas fa-envelope mail"></i></a>
  <a target="_blank" href="https://drive.google.com/file/d/1iCi3cP-gXztstduqIQFq4wJ1ZBPEuavc/view?usp=sharing"><i class="fa-solid fa-file"></i></a>
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
