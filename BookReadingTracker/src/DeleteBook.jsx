export default function DeleteBook(index, items, setItems) {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
}