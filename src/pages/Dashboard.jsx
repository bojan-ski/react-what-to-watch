import { useLoaderData } from "react-router-dom";
import { getContentData } from "../utils/getData";
import Slides from "../components/Slides";
import SearchForContentForm from "../components/SearchForContentForm";

export const loader = async () => {
  const currentPopularMovies = await getContentData('movie/popular')
  const currentPopularTvShows = await getContentData('tv/popular')

  return {currentPopularMovies, currentPopularTvShows}
}

const Dashboard = () => { 
  const {currentPopularMovies, currentPopularTvShows} = useLoaderData()

  return (
    <>
      {/* SEARCH FORM */}
      <SearchForContentForm/>

      {/* SLIDER - CURRENT POPULAR MOVIES */}
      <Slides text='Current Popular Movies' selectedContent={currentPopularMovies} direction={false}/>

      {/* SLIDER - CURRENT POPULAR TV SHOWS */}
      <Slides text='Current Popular Tv Shows' selectedContent={currentPopularTvShows} direction={true}/>
    </>
  )
}


export default Dashboard