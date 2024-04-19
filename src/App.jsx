import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import Search from './pages/Search'
import Movies from "./pages/Movies"
import SelectedMovie from "./pages/SelectedMovie"
import TvShows from "./pages/TvShows"
import SelectedTvShow from "./pages/SelectedTvShow"

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
      },
      {
        path: 'movies/:id',
        element: <SelectedMovie />
      },
      {
        path: 'tv-shows',
        element: <TvShows/>        
      },
      {
        path: 'tv-shows/:id',
        element: <SelectedTvShow />
      }
    ]
  }
])

const App = () =>{
  return <RouterProvider router={router}></RouterProvider>
}

export default App
