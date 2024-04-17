const GridCardContentData = ({ content }) => {
    const { poster_path, title } = content
    
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
                <a href="#" className="btn btn-primary fw-bold">
                    Details
                </a>
            </div>
        </div>
    )
}

export default GridCardContentData