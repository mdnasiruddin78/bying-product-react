
import { useState } from 'react'
import './App.css'
import Allproducts from './Components/Allproducts/Allproducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Navbar from './Components/Header/Navbar'


function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const hendleIsActiveStatus = (status) => {
      if(status === "cart"){
        setIsActive({
            cart: true,
            status: "cart"
        })
      }
      else{
        setIsActive({
          cart: false,
          status: "cart"
      })
      }
  }

  const [selectedProducts, setSelectedProducts] = useState([])

  const hendleDlete = (id) => {
      const newDelete = selectedProducts.filter((remove) => remove.id != id)
      setSelectedProducts(newDelete)
  }

  const hendleSelectedProducts = (product) => {
    
    const isExist = selectedProducts.find((p) => p.id === product.id)

    if(isExist){
      alert('alrady exist')
    }
    else{
      const newProduct = [...selectedProducts,product]
      setSelectedProducts(newProduct)
    }
  }
  
  return (
    <>
     <Navbar selectedProducts={selectedProducts.length}></Navbar>
     <div className='flex justify-around'>
        <Allproducts hendleSelectedProducts={hendleSelectedProducts}></Allproducts>
        <CartContainer isActive={isActive} selectedProducts={selectedProducts}
        hendleIsActiveStatus={hendleIsActiveStatus} hendleDlete={hendleDlete}></CartContainer>
     </div>
    </>
  )
}

export default App
