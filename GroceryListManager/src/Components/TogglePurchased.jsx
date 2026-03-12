export function TogglePurchased(index, items, setItems) {

  const newList = [...items];

  newList[index].purchased = !newList[index].purchased;

  setItems(newList);
}