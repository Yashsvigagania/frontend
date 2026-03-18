export default function AddBook(items, input, setItems, setInput, setError) {
    const name = input.trim();

    if (name === "") {
        setError("Book title cannot be empty");
        return;
    }

    const exists = items.find(
        (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
        setError("Book already exists");
        return;
    }

    const newItem = {
        name: name,
        read: false
    };

    setItems([...items, newItem]);
    setInput("");
    setError("");
}