import { Link } from "react-router-dom"
import noImage from '../assets/no-available-img.png'

const GridCardContentData = ({ cardContent }) => {
    // const { poster_path, title } = cardContent
    // console.log(cardContent);

    return (
        <div className="card overflow-hidden">
            <img src={cardContent.poster_path ? `https://image.tmdb.org/t/p/w500${cardContent.poster_path}` : noImage} className="card-img-top" alt={cardContent.title ? cardContent.title : cardContent.name} />
            {/* <img src={noImage} className="card-img-top" alt={cardContent.title ? cardContent.title : cardContent.name} /> */}

            <div className="card-body bg-dark text-white">
                <h5 className="card-title">
                    {cardContent.title ? cardContent.title : cardContent.name}
                </h5>
                <p className="card-text">
                    Average rate: <span className="fw-bold">{cardContent.vote_average.toFixed(2)}</span>
                </p>
                <Link to={cardContent.title ? `/movies/${cardContent.id}` : `/tv-shows/${cardContent.id}`} className="btn btn text-white border-warning fw-bold w-50">
                    Details
                </Link >
            </div>
        </div>
    )
}

export default GridCardContentData