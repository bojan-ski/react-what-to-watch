import { useGlobalContext } from "../context"
import PageHeader from '../components/PageHeader'
import GridCardContentData from '../components/GridCardContentData'
import Pagination from "../components/Pagination"

const Search = () => {
  const { searchResults } = useGlobalContext()
  console.log(searchResults);
  const results = searchResults.data
  console.log(results);

  if (!results || results.length === 0) {
    return (
      <div className="container">
        <PageHeader text='No search results found' />
      </div>
    )
  }

  return (
    <>
      {/* MAIN - PAGE CONTENT */}
      <div className="container">
        <div className="search-results mb-3">
          <PageHeader text='Search results' />

            <div className="grid">
              {results?.map(cardContent => {
                // console.log(cardContent);
                return (
                  <GridCardContentData key={cardContent.id} cardContent={cardContent} />
                )
              })}
            </div>

        </div>
      </div>

      {/* PAGINATION */}
      <Pagination />
    </>
  )
}

export default Search