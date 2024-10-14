export function loadDesserts() {
  const content = document.getElementById("content");

  const desserts = document.createElement("h3");
  desserts.textContent = "Desserts";

  const dessertsList = document.createElement("ul");
  [
    "Baklava: Layers of crispy filo pastry filled with nuts and soaked in sweet syrup.",
    "Kunafa: Shredded pastry soaked in sweet syrup and layered with soft cheese.",
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.split(":")[0]}</strong> - ${
      item.split(":")[1]
    }`;
    dessertsList.appendChild(li);
  });
  content.appendChild(desserts);
  content.appendChild(dessertsList);
}
