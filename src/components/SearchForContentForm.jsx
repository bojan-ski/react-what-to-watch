import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const SearchForContentForm = () => {
    const { setSearchContent } = useGlobalContext()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        setSearchContent({
            searchTerm: e.target.elements[0].value.trim(),
            searchType: e.target.elements[1].checked ? 'movie' : 'tv'
        })       
        
        navigate('/search')
        e.target.elements[0].value = ''
    }

    return (
        <div className="search mb-4">
            <div className="container text-center text-white">
                <h4 className="mb-4">
                    Looking for something specific?
                </h4>

                <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" name="searchTerm" id="searchTerm" className="form-control" placeholder="Enter search term" required />
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="d-flex">
                            <div className="form-check">
                                <label htmlFor="movie" className="form-check-label">
                                    Movies
                                </label>
                                <input type="radio" id="movie" name="type" className="form-check-input" defaultChecked />
                            </div>
                            <div className="form-check ms-3">
                                <label htmlFor="tv-show" className="form-check-label">
                                    TV Shows
                                </label>
                                <input type="radio" id="tv-show" name="type" className="form-check-input" />
                            </div>
                        </div>
                        <button className="btn btn-dark text-white fw-bold border-warning" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForContentForm