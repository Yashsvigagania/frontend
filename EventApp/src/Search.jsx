import {useState} from 'react';
export default function Search(){
    const[find,setFind]=useState("");
    //const name=["Dell","Lenovo","Acer","Asus"];
    //const brand=name.filter();
    //const newBrand=brand.map();
    return(
        <>
        <h2>SEARCH</h2>
        <input type="text"
        placeholder='Enter key to search'
        value={find}
        onChange={(e)=>setFind(e.target.value)}>
        </input>
        </>
    )
}