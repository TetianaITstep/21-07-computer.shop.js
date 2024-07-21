// import { laptops } from "./db.js";

export function addGoods(goods) {
  const laptopCard = goods
    .map(
      ({
        name,
        price,
        specs: { processor, ram, storage, display, graphics },
        image,
        availability,
      }) => {
        return `<div class='card'>
      <img src="${image}">
      <h3 class="title">${name}</h3>
      <ul>
      <li>${processor}</li>
      <li>${ram}</li>
      <li>${storage}</li>
      <li>${display}</li>
      <li>${graphics}</li>
      </ul>
      <button class="buyBtn" ${
        !availability ? "disabled" : ""
      }><span class="text">${
          availability ? "Купити" : "Під замовлення"
        } <span>${price} грн</span></span><span class="icon">🛒</span></button>    </div>`;
      }
    )
    .join("");
  document.querySelector(".goods_container").innerHTML = laptopCard;
}
