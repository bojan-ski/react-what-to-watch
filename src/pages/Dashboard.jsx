import { useLoaderData } from "react-router-dom";
import { getContentData } from "../utils/getData";
import Slides from "../components/Slides";
import SearchForContentForm from "../components/SearchForContentForm";

export const loader = async () => {
  const currentPopularMovies = await getContentData('movie/top_rated')
  const currentPopularTvShows = await getContentData('tv/top_rated')

  return {currentPopularMovies, currentPopularTvShows}
}

const Dashboard = () => { 
  const {currentPopularMovies, currentPopularTvShows} = useLoaderData()

  return (
    <>
      {/* SEARCH FORM */}
      <SearchForContentForm/>
      {/* SLIDER - TOP RATED MOVIES */}
      <Slides text='Top rated movies' selectedContent={currentPopularMovies} direction={false}/>

      {/* SLIDER - TOP RATED TV SHOWS */}
      <Slides text='Top rated TV shows' selectedContent={currentPopularTvShows} direction={true}/>
    </>
  )
}


export default Dashboard