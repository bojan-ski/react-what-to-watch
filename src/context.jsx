import { createContext, useContext, useState } from "react";
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [searchContent, setSearchContent] = useState({})
    const [pageNumber, setPageNumber] = useState(1)
    const [totalNumberOfPages, setTotalNumberOfPages] = useState('')

    const getSearchContent = async (searchTerm, searchType) => {
        // console.log(searchType, searchTerm);
        const response = await axios.get(`${import.meta.env.VITE_URL}search/${searchType}?query=${searchTerm}&page=${pageNumber}&api_key=${import.meta.env.VITE_API_KEY}`)
        const results = response.data
        // console.log(results);
    
        setSearchContent(results.results)
        setTotalNumberOfPages(results.total_pages)
      }

    return <AppContext.Provider value={{searchContent, getSearchContent, pageNumber, setPageNumber, totalNumberOfPages}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)