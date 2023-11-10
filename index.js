let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

document.getElementById('resume-button-1').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1LiIlhl95XIJPwvGIaRoJ14-pMBA6ZkKR/view?usp=sharing", "_blank");
});

document.getElementById('resume-button-2').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1LiIlhl95XIJPwvGIaRoJ14-pMBA6ZkKR/view?usp=sharing", "_blank");
});

