import { Link } from "react-router-dom";

const SelectedContent = ({ selectedContent }) => {
    // console.log(selectedContent);

    return (
        <div className='content-details tv-show text-white'>
            {/* background-image/poster */}
            <div className="background-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedContent.backdrop_path})` }}></div>

            {/* page content */}
            <div className="container">
                <div className="row align-items-center">
                    {/* row item 1 */}
                    <div className="section-1 col-12 col-md-6 p-4">
                        <img src={`https://image.tmdb.org/t/p/w500${selectedContent.poster_path}`} alt={selectedContent.title ? selectedContent.title : selectedContent.name} className="img-fluid rounded border border-white"/>
                    </div>

                    {/* row item 2 */}
                    <div className="section-2 col-12 col-md-6 p-4">
                        <h2 className="text-center mb-5">
                            {selectedContent.title ? selectedContent.title : selectedContent.name}
                        </h2>

                        <div>
                            <p>
                                <span>Average rating:</span> {selectedContent.vote_average.toFixed(2)} / 10
                            </p>
                            {selectedContent.title ?
                                (
                                    <>
                                        <p>
                                            <span>Runtime:</span> {selectedContent.runtime} min.
                                        </p>
                                        <p>
                                            <span>Release Date:</span> {selectedContent.release_date}
                                        </p>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <p>
                                            <span>First Air Date:</span> {selectedContent.first_air_date}
                                        </p>
                                        <p>
                                            <span>Last Air Date:</span> {selectedContent.last_air_date}
                                        </p>
                                        <p>
                                            <span>Total number of Seasons:</span> {selectedContent.number_of_seasons}
                                        </p>
                                        <p>
                                            <span>Total number of Episodes:</span> {selectedContent.number_of_episodes}
                                        </p>
                                    </>
                                )
                            }
                            <p>
                                <span>Overview:</span> {selectedContent.overview}
                            </p>
                        </div>

                        <div>
                            <h5>Genres:</h5>
                            <ul className="list-unstyled">
                                {selectedContent.genres.map((genre, idx) => {
                                    return <li key={idx}>
                                        {genre.name}
                                    </li>
                                })}
                            </ul>
                        </div>
                        
                        <div className="btn-container d-flex justify-content-between">
                            <Link to={selectedContent.title ? `/movies` : `/tv-shows`} className="btn text-white px-4 border border-warning fw-bold">
                                Back
                            </Link >
                            {selectedContent.homepage && (
                                <a href={selectedContent.homepage} className="btn text-white px-4 border border-warning fw-bold" target="_blank">
                                    Visit homepage
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedContent