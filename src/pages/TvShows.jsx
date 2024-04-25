// import { getContentData } from "../utils/getData"
// import { useLoaderData } from "react-router-dom"
import { useGlobalContext } from "../context"
import Loading from "../components/Loading"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"
import Pagination from "../components/Pagination"

// export const loader = async () => {
//   const selectedContent = await getContentData('tv/popular')

//   return selectedContent
// }

const TvShows = () => {
  // const selectedContent = useLoaderData()

  const { setRequiredContentList, getContentList } = useGlobalContext()
  setRequiredContentList('tv')

  // console.log(getContentList);
  const contentList = getContentList.data
  // console.log(contentList);

  if (getContentList?.isPending) {
    return <Loading />
  }

  return (
    <>
      {/* MAIN - PAGE CONTENT */}
      <div className="container">
        <div className="content-list tv-shows mb-3">
          {/* page header */}
          <PageHeader text='Current Popular Tv Shows' />

          {/* page content - tv show list */}
          <div className="grid">
            {contentList?.map(cardContent => {
              // console.log(content);
              return (
                <GridCardContentData key={cardContent.id} cardContent={cardContent} />
              )
            })}
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <Pagination />

    </>
  )
}

export default TvShows