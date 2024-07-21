import { addGoods } from "./src/js/add_goods.js";
import { laptops } from "./src/js/db.js";
import { filterGoods } from "./src/js/filter.js";
import { renderSelect } from "./src/js/render_select.js";

document.addEventListener("DOMContentLoaded", () => {
  addGoods(laptops);
  const uniqueProcessor = new Set();
  const uniqueRam = new Set();
  const uniqueStorage = new Set();
  const uniqueDisplay = new Set();
  const uniqueGraphics = new Set();
  laptops.forEach((data) => {
    const {
      specs: { processor, ram, storage, display, graphics },
    } = data;
    uniqueProcessor.add(processor);
    uniqueRam.add(ram);
    uniqueStorage.add(storage);
    uniqueDisplay.add(display);
    uniqueGraphics.add(graphics);
  });
  renderSelect(
    document.getElementById("processorFilter"),
    Array.from(uniqueProcessor)
  );
  renderSelect(document.getElementById("ramFilter"), Array.from(uniqueRam));
  renderSelect(
    document.getElementById("storageFilter"),
    Array.from(uniqueStorage)
  );
  renderSelect(
    document.getElementById("displayFilter"),
    Array.from(uniqueDisplay)
  );
  renderSelect(
    document.getElementById("graphicsFilter"),
    Array.from(uniqueGraphics)
  );
  // filter event
  document.getElementById("processorFilter").addEventListener("change", () => {
    filterGoods(laptops);
    console.log("Change event");
  });
  document.getElementById("ramFilter").addEventListener("change", () => {
    filterGoods(laptops);
  });
  document.getElementById("storageFilter").addEventListener("change", () => {
    filterGoods(laptops);
  });
  document.getElementById("displayFilter").addEventListener("change", () => {
    filterGoods(laptops);
  });
  document.getElementById("graphicsFilter").addEventListener("change", () => {
    filterGoods(laptops);
  });
  document
    .getElementById("pointsFilter")
    .addEventListener("input", updatePriceRange);
  function updatePriceRange() {
    document.getElementById("pointsValue").textContent =
      document.getElementById("pointsFilter").value;
    filterGoods(laptops);
  }
});
