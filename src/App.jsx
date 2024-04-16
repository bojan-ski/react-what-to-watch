import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"

const App = () => { 
  return (
    <BrowserRouter>
      <>
        <Navbar/>

        <main>
          <div className="container">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='movies' element={<Movies />} />
              <Route path='tv-shows' element={<TvShows />} />
            </Routes>
          </div>
        </main>

        <Footer/>
      </>
    </BrowserRouter>
  )
}

export default App
