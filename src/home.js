export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Welcome to Our Arabic Restaurant";

  const description = document.createElement("p");
  description.textContent = "Experience the finest Arabic cuisine with us!";

  content.appendChild(title);
  content.appendChild(description);
}
