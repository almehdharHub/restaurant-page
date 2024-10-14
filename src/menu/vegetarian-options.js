export function loadVegetarianOptions() {
  const content = document.getElementById("content");

  const vegetarianOptions = document.createElement("h3");
  vegetarianOptions.textContent = "Vegetarian Options";

  const vegetarianList = document.createElement("ul");
  [
    "Stuffed Grape Leaves: Grape leaves filled with a mixture of rice, herbs, and spices.",
    "Vegetarian Mousakhan: Roasted vegetables and caramelized onions wrapped in thin bread.",
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.split(":")[0]}</strong> - ${
      item.split(":")[1]
    }`;
    vegetarianList.appendChild(li);
  });
  content.appendChild(vegetarianOptions);
  content.appendChild(vegetarianList);
}
