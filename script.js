document.addEventListener("DOMContentLoaded", () => {
  fetch("items/items.json")
    .then(res => res.json())
    .then(items => {
      const container = document.getElementById("item-list");
      items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>${item.price}</strong></p>
        `;
        container.appendChild(div);
      });
    });
});