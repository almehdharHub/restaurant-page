export function loadAppetizers() {
  const content = document.getElementById("content");

  const appetizers = document.createElement("h3");
  appetizers.textContent = "Appetizers";

  const appetizersList = document.createElement("ul");
  [
    "Hummus: Smooth blend of chickpeas, tahini, and olive oil.",
    "Baba Ghanoush: Smoky eggplant dip with a touch of lemon.",
    "Falafel: Crispy chickpea fritters served with tahini sauce.",
    "Fattoush Salad: Fresh greens, radish, tomatoes, and fried pita bread in a tangy dressing.",
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.split(":")[0]}</strong> - ${
      item.split(":")[1]
    }`;
    appetizersList.appendChild(li);
  });
  content.appendChild(appetizers);
  content.appendChild(appetizersList);
}
