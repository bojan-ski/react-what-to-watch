import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Search from './pages/Search'
import Movies from "./pages/Movies"
import SelectedMovie from "./pages/SelectedMovie"
import TvShows from "./pages/TvShows"
import SelectedTvShow from "./pages/SelectedTvShow"
import Error from "./pages/Error"

// LOADERS
import { loader as dashboardLoader } from "./pages/Dashboard"
// import { loader as moviesLoader } from "./pages/Movies"
import { loader as selectedMovieLoader } from "./pages/SelectedMovie"
// import { loader as tvShowsLoader } from "./pages/TvShows"
import { loader as selectedTvShowLoader } from "./pages/SelectedTvShow"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader
      },
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'movies',
        element: <Movies/>,
        // loader: moviesLoader,
        errorElement: <h1>hello</h1>,
        // children:[
        //   {
        //     path: '/movies/:id',
        //     element: <SelectedMovie />,
        //     loader: selectedMovieLoader
        //   },
        // ]
      },
      {
        path: 'movies/:id',
        element: <SelectedMovie />,
        loader: selectedMovieLoader
      },
      {
        path: 'tv-shows',
        element: <TvShows/>,
        // loader: tvShowsLoader    
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
