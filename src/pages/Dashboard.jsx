import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Dashboard = () => {  
  const {searchContent, getSearchContent, totalNumberOfPages} = useGlobalContext()
  const navigate = useNavigate()  

  const handleSubmit = e => {
    e.preventDefault()

    const searchTerm = e.target.elements[0].value
    const searchType = e.target.elements[1].checked ? 'movie' : 'tv'

    getSearchContent(searchTerm, searchType)  
    navigate('/search')
  }

  console.log(searchContent);
  console.log(totalNumberOfPages);

  return (
    <>
      {/* SEARCH FORM */}
      <section className="search">
        <div className="container text-center text-white">
          <h4 className="mb-4">
            Looking for something specific?
          </h4>

          <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" name="searchTerm" id="searchTerm" className="form-control" placeholder="Enter search term" required/>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <label htmlFor="movie" className="form-check-label">
                  Movies
                </label>
                <input type="radio" id="movie" name="type" className="form-check-input" defaultChecked/>
              </div>
              <div className="form-check">
                <label htmlFor="tv-show" className="form-check-label">
                  TV Shows
                </label>
                <input type="radio" id="tv-show" name="type" className="form-check-input"/>
              </div>
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SLIDER */}
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard