import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Movies from "./pages/Movies"
import SelectedMovie from "./pages/SelectedMovie"
import TvShows from "./pages/TvShows"

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <>
          <Navbar />

          <main>
            <Routes>
              <Route index path='/' element={<Dashboard />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/movies/:id' element={<SelectedMovie />} />
              <Route path='/tv-shows' element={<TvShows />} />
            </Routes>
          </main>

          <Footer />
        </>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
