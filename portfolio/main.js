"use strict";

const navClose = document.getElementById("nav-close");
const nav = document.querySelector(".aside");

const navbtn = document.getElementById("nav-btn");
const heroBtn = document.querySelector(".hero-btn");

const about = document.getElementById("about");
const scroll = document.querySelectorAll(".scroll-link");

const navBar = document.querySelector(".nav");
const header = document.querySelector(".header");

const aboutbtn = document.querySelector(".about-btn");
const contact = document.querySelector(".contacts");

///date functionality
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

//side bar functionality
navbtn.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.add("show-nav");
});

navClose.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.remove("show-nav");
});

//btn scroll functionality
heroBtn.addEventListener("click", function (e) {
  e.preventDefault();

  about.scrollIntoView({ behavior: "smooth" });
});

aboutbtn.addEventListener("click", function (e) {
  e.preventDefault();
  contact.scrollIntoView({ behavior: "smooth" });
});

//nav scroll link functionality
scroll.forEach(function (el) {
  el.addEventListener("click", function (e) {
    //prevent defalt
    e.preventDefault();
    //rmove nave
    nav.classList.remove("show-nav");

    const link = e.target.getAttribute("href");
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  });
});

//stiky navigation functionality

const height = navBar.getBoundingClientRect().height;

const stikyFun = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) navBar.classList.add("sticky-nav");
  else navBar.classList.remove("sticky-nav");
};

const stikyObserver = new IntersectionObserver(stikyFun, {
  root: null,
  threshold: 0,
  rootMargin: `-${height}px`,
});

stikyObserver.observe(header);

// revile section functionality

const allSection = document.querySelectorAll(".section");

const secFun = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("slide");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(secFun, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("slide");
});
