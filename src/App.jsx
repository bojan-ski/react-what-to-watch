import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Search from './pages/Search'
import Movies from "./pages/Movies"
import SelectedMovie from "./pages/SelectedMovie"
import TvShows from "./pages/TvShows"
import SelectedTvShow from "./pages/SelectedTvShow"

import { loader as moviesLoader } from "./pages/Movies"
import { loader as selectedMovieLoader } from "./pages/SelectedMovie"
import { loader as tvShowsLoader } from "./pages/TvShows"
import { loader as selectedTvShowLoader } from "./pages/SelectedTvShow"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: 'search',
        element: <Search/>,
      },
      {
        path: 'movies',
        element: <Movies/>,
        loader: moviesLoader
      },
      {
        path: 'movies/:id',
        element: <SelectedMovie />,
        loader: selectedMovieLoader
      },
      {
        path: 'tv-shows',
        element: <TvShows/>,
        loader: tvShowsLoader    
      },
      {
        path: 'tv-shows/:id',
        element: <SelectedTvShow />,
        loader: selectedTvShowLoader
      }
    ]
  }
])

const App = () =>{
  return <RouterProvider router={router}></RouterProvider>
}

export default App
