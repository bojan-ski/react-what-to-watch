import { getContentData } from "../utils/getData"
import { useLoaderData } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"

export const loader = async () => {
  const selectedContent = await getContentData('tv/popular')

  return selectedContent 
}

const TvShows = () => {
  const selectedContent = useLoaderData()

  return (
    <div className="container">
      <div className="content-list tv-shows mb-3">
        <PageHeader text='Current Popular Tv Shows' />

        <div className="grid">
          {selectedContent?.map(cardContent => {
            // console.log(content);
            return (
              <GridCardContentData key={cardContent.id} cardContent={cardContent} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TvShows