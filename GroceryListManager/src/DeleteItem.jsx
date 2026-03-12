export function DeleteItem(index, items, setItems) {

  const newList = items.filter((item, i) => i !== index);

  setItems(newList);
}