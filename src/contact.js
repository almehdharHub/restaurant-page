export function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Contact Us";

  const address = document.createElement("p");
  address.innerHTML = `<strong>Address:</strong> 1234 Oasis Street, Suite 100, Desert City, XY 12345`;

  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Phone:</strong> (123) 456-7890`;

  const email = document.createElement("p");
  email.innerHTML = `<strong>Email:</strong> contact@arabicrestaurant.com`;

  const hours = document.createElement("p");
  hours.innerHTML = `<strong>Opening Hours:</strong> <br>
      Saturday - Thursday: 10:00 AM - 2:00 PM <br>
      Friday: 2:00 PM - 2:00 AM`;

  const form = document.createElement("form");
  form.innerHTML = `
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
  
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br><br>
  
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>
  
      <button type="submit">Send Message</button>
    `;

  content.appendChild(title);
  content.appendChild(address);
  content.appendChild(phone);
  content.appendChild(email);
  content.appendChild(hours);
  content.appendChild(form);
}
