import { useEffect } from "react"
import { useGlobalContext } from "../context"

const TvShows = () => {
  const { fetchContentData, popularContent } = useGlobalContext()

  useEffect(() => {
    fetchContentData('tv/popular')
  }, [])

  return (
    <>
      <h2 className="text-center mb-3">
        Current Popular Movies
      </h2>

      <div className="content-list tv-shows grid mb-3">
        {popularContent.map(content => {
          // console.log(content);
          const { id, poster_path, title } = content

          return (
            <div key={id} className="card">
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
        })}
      </div>

    </>
  )
}

export default TvShows