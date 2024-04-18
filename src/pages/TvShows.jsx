import { useEffect } from "react"
import { useGlobalContext } from "../context"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"

const TvShows = () => {
  const { fetchContentData, selectedContent } = useGlobalContext()
  
  // fetchContentData('tv/popular')

  useEffect(() => {
    fetchContentData('tv/popular')
  }, [])

  return (
    <div className="container">
      <div className="content-list tv-shows mb-3">
        <PageHeader text='Current Popular Tv Shows' />

        <div className="grid">
          {selectedContent?.map(content => {
            // console.log(content);
            return <GridCardContentData key={content.id} content={content} />
          })}
        </div>
      </div>
    </div>
  )
}

export default TvShows