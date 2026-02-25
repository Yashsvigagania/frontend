import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header';
//import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';

function App() {
  const [cart, setCart] = useState([]);
  const[totalAmount,setTotalAmount]=useState(0);
  const product=[
    {
      id:1,
      name:"Laptop",
      price:50000,
      image:"https://m.media-amazon.com/images/I/410FFJmvk8L._SY300_SX300_QL70_FMwebp_.jpg"

    },
    {
      id:2,
      name:"Mobile",
      price:30000,
      image:"https://m.media-amazon.com/images/I/61amb0CfMGL._SX569_.jpg"
    },
    {
      id:3,
      name:"Charger",
      price:1000,
      image:"https://www.jiomart.com/images/product/original/rvvphvzphh/ubon-fasto-power-ch-1000-fast-gan-pd-charger-45-w-3-a-multiport-mobile-charger-product-images-orvvphvzphh-p594709664-2-202210210018.jpg?im=Resize=(420,420)"

    }
  ]

  function addToCart(product){
    setCart([...cart,product]);
    setTotalAmount(totalAmount+product.price);
  }
  // function removeFromCart(index){
  //   const updateCart=cart.filter((_,i)=>i!=index);
  //   setCart(updateCart);
  // }

  //const totalAmount=cart.reduce((total,index)=>(total+index.price,0));

  return (
    <>
        <Header cartCount={cart.length}/>
        <Cart totalAmount={totalAmount}/>
        <ProductList products={product} addToCart={addToCart} />
        
    </>
  )
}

export default App
