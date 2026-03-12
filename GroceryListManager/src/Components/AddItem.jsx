export function AddItem(input, items, setItems, setInput, setError) {

  const name = input.trim();

  if (name === "") {
    setError("Item name cannot be empty.");
    return;
  }

  const exists = items.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (exists) {
    setError("Item already exists in the list.");
    return;
  }

  const newItem = {
    name: name,
    purchased: false
  };

  setItems([...items, newItem]);
  setInput("");
  setError("");
}