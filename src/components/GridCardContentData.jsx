import { Link } from "react-router-dom"

const GridCardContentData = ({ content }) => {
    const { id, poster_path, title } = content
    
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card-img-top" alt={title} />

            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    NESTO
                </p>
                <Link to={`/movies/${id}`} className="btn btn-primary fw-bold">
                    Details
                </Link >
            </div>
        </div>
    )
}

export default GridCardContentData