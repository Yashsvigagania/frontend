import {useState} from 'react'
export default function Counter(){
    const [count,setCount]=useState(0);  // arr becomes state here
    //var count=0;
    function handleIncrement(){
        setCount(count=>count+1); //callback
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
//import {useState} - hook - user defined
//.map .filter padhna h
// setCount-setter
//do not use = instead use => because we are changing the state