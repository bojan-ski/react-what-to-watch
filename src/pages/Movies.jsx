import { useEffect } from "react"
import { useGlobalContext } from "../context"
import PageHeader from "../components/PageHeader"
import GridCardContentData from "../components/GridCardContentData"

const Movies = () => {
    const { fetchContentData, selectedContent } = useGlobalContext()

    // fetchContentData('movie/popular')

    useEffect(() => {
        fetchContentData('movie/popular')
    }, [])

    return (
        <div className="container">
            <div className="content-list movies mb-3">
                <PageHeader text='Current Popular Movies' />

                <div className="grid">
                    {selectedContent?.map(content => {
                        // console.log(content);
                        return (
                            <GridCardContentData key={content.id} content={content} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Movies