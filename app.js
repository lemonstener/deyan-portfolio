// Navbar

const toggleMobileMenu = (menu) => menu.classList.toggle("open");

// Animations

const animatables = document.querySelectorAll(".animatable");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeInUp");
    }
  });
});

animatables.forEach((element) => {
  observer.observe(element);
});

// Carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const openModal = (projectTitle) => {
  const html = document.querySelector("html");
  const modal = document.getElementById(`modal-${projectTitle}`);

  Object.assign(html.style, {
    overflow: "hidden",
  });

  Object.assign(modal.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
};

const closeModal = (projectTitle) => {
  const className = window.event.target.className;
  const html = document.querySelector("html");
  const modal = document.getElementById(`modal-${projectTitle}`);

  if (
    className === "btn-source" ||
    className === "modal-close" ||
    className === "modal-overlay"
  ) {
    Object.assign(html.style, {
      overflow: "auto",
    });

    Object.assign(modal.style, {
      display: "none",
    });
  }
};
