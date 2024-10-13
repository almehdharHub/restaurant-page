export function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = document.createElement("p");
  info.innerHTML =
    "Phone: (123) 456-7890<br>Email: info@deliciousbites.com<br>Address: 123 Tasty Street, Flavortown, FK 12345";

  contact.appendChild(title);
  contact.appendChild(info);

  content.appendChild(contact);
}
