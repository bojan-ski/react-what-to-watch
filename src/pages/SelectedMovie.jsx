import { Link, useLoaderData } from "react-router-dom"
import { getContentData } from "../utils/getData"

export const loader = async ({ params }) => {
    const selectedContent = await getContentData(`movie/${params.id}`)

    return selectedContent
}

const SelectedMovie = () => {
    const selectedContent = useLoaderData()

    return (
        <>
            <div className='content-details movie text-white'>
                {/* background-image/poster */}
                <div className="background-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedContent?.backdrop_path})` }}></div>

                {/* page content */}
                <div className="container">
                    <div className="row align-items-center">
                        {/* row item 1 */}
                        <div className="section-1 col-12 col-md-6 p-4">
                            <img src={`https://image.tmdb.org/t/p/w500${selectedContent?.poster_path}`} alt={selectedContent?.title} className="border border-warning" />
                        </div>

                        {/* row item 2 */}
                        <div className="section-2 col-12 col-md-6 p-4">
                            <h2 className="text-center mb-5">
                                {selectedContent?.title}
                            </h2>

                            <div>
                                <p>
                                    <span>Average rating:</span> {selectedContent?.vote_average.toFixed(2)} / 10
                                </p>
                                <p>
                                    <span>Runtime:</span> {selectedContent?.runtime} min.
                                </p>
                                <p>
                                    <span>Release Date:</span> {selectedContent?.release_date}
                                </p>
                                <p>
                                    <span>Overview:</span> {selectedContent?.overview}
                                </p>
                            </div>

                            <div>
                                <h5>Genres:</h5>
                                <ul className="list-unstyled">
                                    {selectedContent?.genres.map(genre => {
                                        return <li>
                                            {genre.name}
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <Link to={`/movies`} className="btn text-white px-4 border border-warning fw-bold">
                                Back
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedMovie