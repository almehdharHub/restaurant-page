export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const menuItems = [
    { name: "Classic Burger", price: "$12" },
    { name: "Caesar Salad", price: "$10" },
    { name: "Margherita Pizza", price: "$15" },
    { name: "Grilled Salmon", price: "$18" },
  ];

  const menuList = document.createElement("ul");
  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.price}`;
    menuList.appendChild(listItem);
  });

  menu.appendChild(title);
  menu.appendChild(menuList);

  content.appendChild(menu);
}
