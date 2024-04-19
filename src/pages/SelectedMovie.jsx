import { useLoaderData } from "react-router-dom"
import { getContentData } from "../utils/getData"
import SelectedContent from "../components/SelectedContent"

export const loader = async ({ params }) => {
    const selectedContent = await getContentData(`movie/${params.id}`)

    return selectedContent
}

const SelectedMovie = () => {
    const selectedContent = useLoaderData()

    return (
        <>
            <SelectedContent selectedContent={selectedContent}/>
        </>
    )
}

export default SelectedMovie