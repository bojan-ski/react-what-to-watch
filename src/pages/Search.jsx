import { useGlobalContext } from "../context"
import PageHeader from '../components/PageHeader'
import GridCardContentData from '../components/GridCardContentData'
import Pagination from "../components/Pagination"

const Search = () => {
  const { searchContent } = useGlobalContext()

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
          ) :
            (
              ''
            )
          }
        </div>
      </div>

      {/* PAGINATION */}
      <Pagination />
    </>
  )
}

export default Search