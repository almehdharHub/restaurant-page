export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Delicious Bites";

  const description = document.createElement("p");
  description.textContent =
    "Experience the finest cuisine in town. Our chefs prepare each dish with passion and the freshest ingredients.";

  home.appendChild(title);
  home.appendChild(description);

  content.appendChild(home);
}
