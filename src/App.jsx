import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <>
          <Navbar />

          <main>
            <div className="container">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='movies' element={<Movies />} />
                <Route path='tv-shows' element={<TvShows />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
