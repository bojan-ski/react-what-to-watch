// import { getContentData } from "../utils/getData"
// import { useLoaderData } from "react-router-dom"
import { useGlobalContext } from "../context"
import Loading from "../components/Loading"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"
import Pagination from "../components/Pagination"

// export const loader = async () => {
//     const selectedContent = await getContentData('movie/popular')

//     return selectedContent
// }

const Movies = () => {
    // const selectedContent = useLoaderData()

    const { setRequiredContentList, getContentList } = useGlobalContext()
    // console.log(getContentList);
    setRequiredContentList('movie')

    const contentList = getContentList.data
    // console.log(contentList);

    if (getContentList?.isPending) {
        return <Loading />
    }

    return (
        <>
            {/* MAIN - PAGE CONTENT */}
            <div className="container">
                <div className="content-list movies mb-3">
                    {/* page header */}
                    <PageHeader text='Current Popular Movies' />

                    {/* page content - movie list */}
                    <div className="grid">
                        {contentList?.map(cardContent => {
                            // console.log(cardContent);
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

export default Movies