import { useGlobalContext } from "../context"
import PageHeader from '../components/PageHeader'
import GridCardContentData from '../components/GridCardContentData'
import Pagination from "../components/Pagination"
import Loading from "../components/Loading"

const Search = () => {
  const { searchContent, searchResults } = useGlobalContext()
  // console.log(searchContent);
  // console.log(searchResults);
  const results = searchResults.data
  // console.log(results);

  if (searchResults?.isPending) {
    return <Loading/>
  }

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
          {/* page header */}
          <PageHeader text={`Search results for: ${searchContent.searchTerm.toUpperCase()}`} />

            {/* page content - search results */}
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