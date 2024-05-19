import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetallePokemon from './pages/DetallePokemon'
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx'


function App() {


  return (
  <>
  <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:id' element={<DetallePokemon />} />
      </Routes>
    </BrowserRouter>
  <Footer />
  </>
  )
}

export default App
