// VARIABLES
const wrapper = document.querySelector(".wrapper");
const quarters = document.querySelectorAll(".quarter");

const links = {
  home: home(),
  about: about(),
  projects: projects(),
  contact: contact(),
};

// GENERAL FUNCTIONALITY

function toggle(slice) {
  const open =
    slice.parentElement.className === "wrapper" ? slice : slice.parentElement;
  console.log(open);
}

quarters.forEach((slice) => {
  slice.addEventListener("click", function (e) {
    toggle(e.target);
  });
});
