export default function AddBook(items,input,setItems,setInput,setError){

    const name=input.trim();
    if(name===""){
        setError("Book title cannot be empty");
    }
    
    const exists=items.find(
        (item)=> item.name.toLowerCase()===name.toLowerCase()
    );
    if(exists){
        setError("Book already exists");
    }

    const newItem={
        name:name,
        reading:false,
        completed:false
    };
    
    setItems(...items,newItem);
    setInput("");
    setError("");
}