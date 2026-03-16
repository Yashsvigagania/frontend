export default function DeleteBook(index,items,setItems){
    
    const newList=items.filter((items,i) => i!==index);
    setItems(newList);
}