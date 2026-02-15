import {useState} from 'react'
export default function Counter(){
    const [count=0,setCount]=useState();
    //var count=0;
    function handleIncrement(){
        setCount(count=>count+1);
        //count++;
        console.log(count);
    }
    function handleDecrement(){
        if(count==0){
            alert("Cant decrese now");
            return;
        }
        setCount(count=>count-1)
        //count--;
        console.log(count);
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h3>Count={count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    );
}
//state is used so that the output is printed on UI
//import {} - hook
//.map .filter padhna h