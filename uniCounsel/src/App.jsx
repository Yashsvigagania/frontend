//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import Login from './Pages/Login.jsx';
import Header from './Pages/Header.jsx';
import Footer from './Pages/footer.jsx';
function App() {

  return (
    <>
      <Header title="K.I.E.T" />
      <main>
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App
