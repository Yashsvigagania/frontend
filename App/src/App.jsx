//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Header from './Components/Header.jsx';
//import Registration from './Components/Registration.jsx';
import HeaderProp from './ComponentProp/HeaderProp.jsx';
import Footer from './ComponentProp/Footer.jsx';
//import Main from './Components/Main.jsx';
function App() {
  //const [count, setCount] = useState(0)
  const y=[1234,2026];
  const c={name:"KIET",location:"Ghaziabad",estdyear:1998};
  return (
    <div>
      <HeaderProp title="My app"/>
      <HeaderProp title="Lets explore"/>
      <Footer year={y} company={c}/>
    </div>
  );
}

export default App;
