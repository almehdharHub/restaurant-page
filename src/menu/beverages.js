export function loadBeverages() {
  const content = document.getElementById("content");

  const beverages = document.createElement("h3");
  beverages.textContent = "Beverages";

  const beveragesList = document.createElement("ul");
  [
    "Arabic Coffee: Strong, spiced coffee served with a hint of cardamom.",
    "Mint Lemonade: A refreshing blend of mint, lemon, and sugar.",
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.split(":")[0]}</strong> - ${
      item.split(":")[1]
    }`;
    beveragesList.appendChild(li);
  });
  content.appendChild(beverages);
  content.appendChild(beveragesList);
}
