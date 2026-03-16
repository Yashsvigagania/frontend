export default function ToggleStatus(index,items,setItems){

    const newList=[...items];

    newList[index].read= !newList[index].read;

    setItems(newList);
}