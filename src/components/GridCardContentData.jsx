import { Link } from "react-router-dom"

const GridCardContentData = ({ cardContent }) => {
    // const { poster_path, title } = cardContent
    // console.log(cardContent);

    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500${cardContent.poster_path}`} className="card-img-top" alt={cardContent.title ? cardContent.title : cardContent.name} />

            <div className="card-body">
                <h5 className="card-title">
                    {cardContent.title ? cardContent.title : cardContent.name}
                </h5>
                <p className="card-text">
                    Average rate: <span className="fw-bold">{cardContent.vote_average.toFixed(2)}</span> ⭐
                </p>
                <Link to={cardContent.title ? `/movies/${cardContent.id}` : `/tv-shows/${cardContent.id}`} className="btn btn-primary fw-bold w-50 m-1">
                    Details
                </Link >
            </div>
        </div>
    )
}

export default GridCardContentData