import { PokeApi } from './components/PokeApi/Pokeapi'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <Router>
        <NavBar />  
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/poke' element={<PokeApi />} />
          <Route exact path='/productos/:categoryId' element={<ItemListContainer/>} />
          <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<h1>Vista carrito</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
