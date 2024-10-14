import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu/index";
import { loadContact } from "./contact";

function initializeWebsite() {
  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);

  // Load home page by default
  loadHome();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);
