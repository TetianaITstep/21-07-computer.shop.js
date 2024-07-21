export function renderSelect(elementLinks, dataArray) {
  const sortedArray = dataArray.sort();
  sortedArray.forEach((data) => {
    const optionElement = `<option value="${data}">${data}</option>`;
    elementLinks.insertAdjacentHTML("beforeend", optionElement);
  });
}
