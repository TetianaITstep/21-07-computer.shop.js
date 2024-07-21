import { addGoods } from "./add_goods.js";

export function filterGoods(filterData) {
  const processorValue = document.getElementById("processorFilter").value;
  const ramValue = document.getElementById("ramFilter").value;
  const storageValue = document.getElementById("storageFilter").value;
  const displayValue = document.getElementById("displayFilter").value;
  const graphicsValue = document.getElementById("graphicsFilter").value;
  const priceValue = document.getElementById("pointsFilter").value;

  const filteredGoods = filterData.filter(
    ({ price, specs: { processor, ram, storage, display, graphics } }) => {
      return (
        (processorValue === "all" || processor === processorValue) &&
        (ramValue === "all" || ram === ramValue) &&
        (storageValue === "all" || storage === storageValue) &&
        (displayValue === "all" || display === displayValue) &&
        (graphicsValue === "all" || graphics === graphicsValue) &&
        price <= priceValue
      );
    }
  );
  addGoods(filteredGoods);
}
