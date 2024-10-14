export function loadMainCourses() {
  const content = document.getElementById("content");

  const mainCourses = document.createElement("h3");
  mainCourses.textContent = "Main Courses";

  const mainCoursesList = document.createElement("ul");
  [
    "Mixed Grill Platter: A selection of grilled lamb, chicken, and kebabs, served with rice and grilled vegetables.",
    "Shawarma Wrap: Your choice of chicken or beef, rolled in soft flatbread with garlic sauce and pickles.",
    "Mansaf: Traditional Jordanian lamb served over rice, topped with warm, creamy yogurt sauce.",
    "Makloubeh: Layered rice, vegetables, and tender meat, flipped upside down for the perfect blend of flavors.",
  ].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.split(":")[0]}</strong> - ${
      item.split(":")[1]
    }`;
    mainCoursesList.appendChild(li);
  });
  content.appendChild(mainCourses);
  content.appendChild(mainCoursesList);
}
