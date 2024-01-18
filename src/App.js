
import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import ProductList from "./components/ProductList/ProductList"

const App = () => {
  return (
    <div>
     <Header/>
     <ProductList/>
    </div>
  )
}

export default App