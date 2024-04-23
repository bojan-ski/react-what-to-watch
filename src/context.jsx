import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [searchContent, setSearchContent] = useState({
        searchTerm: '',
        searchType: ''
    })
    const [pageNumber, setPageNumber] = useState(1)
    const [totalNumberOfPages, setTotalNumberOfPages] = useState('')

    const searchResults = useQuery({
        queryKey: ['searchContent', searchContent.searchTerm, pageNumber],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_URL}search/${searchContent.searchType}?query=${searchContent.searchTerm}&page=${pageNumber}&api_key=${import.meta.env.VITE_API_KEY}`)
            const results = response.data
            // console.log(results);
            setTotalNumberOfPages(results.total_pages)
            return results.results
        }
    })

    // console.log(searchResults.data);

    return <AppContext.Provider value={{ searchResults, setSearchContent, pageNumber, setPageNumber, totalNumberOfPages }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)