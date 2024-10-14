import { loadAppetizers } from "./appetizers";
import { loadMainCourses } from "./main-courses";
import { loadVegetarianOptions } from "./vegetarian-options";
import { loadDesserts } from "./desserts";
import { loadBeverages } from "./beverages";

export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Our Menu";

  content.appendChild(title);

  loadAppetizers();
  loadMainCourses();
  loadVegetarianOptions();
  loadDesserts();
  loadBeverages();
}
