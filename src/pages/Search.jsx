import { useGlobalContext } from "../context"
import PageHeader from '../components/PageHeader'
import GridCardContentData from '../components/GridCardContentData'

const Search = () => {
  const {searchContent, pageNumber, setPageNumber, totalNumberOfPages} = useGlobalContext()

  return (
    <>
      {/* MAIN - PAGE CONTENT */}
      <div className="container">
            <div className="content-list movies mb-3">
                <PageHeader text='SEARCH' />

                {searchContent.length > 0 ? (
                  <div className="grid">
                      {searchContent.map(cardContent => {
                          // console.log(cardContent);
                          return (                           
                            <GridCardContentData key={cardContent.id} cardContent={cardContent} />
                          )
                      })}
                  </div>
                ):
                (
                  ''
                )
              }
            </div>
        </div>

        {/* PAGINATION */}
        <div className="section-pagination">
            <div className="num-page">
                <p className="text-white">Pages: {pageNumber} / {totalNumberOfPages}</p>
            </div>

            <div className="btn-container">
                <button className="btn btn-prev text-white" onClick={() => {
                    let prevPage = pageNumber - 1

                    if (prevPage < 1) {
                        prevPage = totalNumberOfPages
                    }
                    setPageNumber(prevPage)
                }}>                    
                    Prev
                </button>

                <button className="btn btn-next text-white" onClick={() => {
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
    </>
  )
}

export default Search