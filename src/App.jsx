import { PokeApi } from './components/PokeApi/Pokeapi'
import { ProductList } from './components/ProductList/ProductList'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/poke' element={<PokeApi />} />
          <Route exact path='/productos/:categoryId' element={<ProductList />} />
          <Route exact path='/cart' element={<h1>Vista carrito</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
