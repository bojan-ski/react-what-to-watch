import { Link } from "react-router-dom"

const GridCardContentData = ({ content }) => {
    // const { poster_path, title } = content
    console.log(content);

    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${content.poster_path}`} className="card-img-top" alt={content.title ? content.title : content.name} />

            <div className="card-body">
                <h5 className="card-title">
                    {content.title ? content.title : content.name} 
                </h5>
                <p className="card-text">
                    NESTO
                </p>
                <Link to={content.title ? `/movies/${content.id}` : `/tv-shows/${content.id}`} className="btn btn-primary fw-bold w-50 m-1">
                    Details
                </Link >
            </div>
        </div>
    )
}

export default GridCardContentData