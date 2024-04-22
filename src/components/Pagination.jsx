import { useGlobalContext } from "../context"

const Pagination = () => {
    const { pageNumber, setPageNumber, totalNumberOfPages } = useGlobalContext()

    if (!totalNumberOfPages || totalNumberOfPages <= 1) return

    return (
        <div className="pagination mb-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="page-number">
                    <p className="text-white fw-bold m-0">
                        Pages: {pageNumber} / {totalNumberOfPages}
                    </p>
                </div>

                <div className="btn-container">
                    {/* BTN - PREV */}
                    <button className="btn btn-prev border-warning text-white px-3 mx-3" onClick={() => {
                        let prevPage = pageNumber - 1

                        if (prevPage < 1) {
                            prevPage = totalNumberOfPages
                        }
                        setPageNumber(prevPage)
                    }}>
                        Prev
                    </button>
                    {/* BTN - NEXT */}
                    <button className="btn btn-next border-warning text-white px-3 " onClick={() => {
                        let nextPage = pageNumber + 1

                        if (nextPage > totalNumberOfPages) {
                            nextPage = 1
                        }
                        setPageNumber(nextPage)
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination