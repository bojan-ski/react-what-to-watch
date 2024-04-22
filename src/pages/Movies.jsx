import { getContentData } from "../utils/getData"
import { useLoaderData } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"

export const loader = async () => {
    const selectedContent = await getContentData('movie/popular')

    return selectedContent 
}

const Movies = () => {
    const selectedContent = useLoaderData()

    return (
        <div className="container">
            <div className="content-list movies mb-3">
                <PageHeader text='Current Popular Movies' />

                <div className="grid">
                    {selectedContent?.map(cardContent => {
                        // console.log(cardContent);
                        return (
                            <GridCardContentData key={cardContent.id} cardContent={cardContent} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Movies