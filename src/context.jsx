import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [searchContent, setSearchContent] = useState({
        searchTerm: '',
        searchType: ''
    })
    const [requiredContentList, setRequiredContentList] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [totalNumberOfPages, setTotalNumberOfPages] = useState('')

    const searchResults = useQuery({
        queryKey: ['searchContent', searchContent.searchTerm, pageNumber],
        queryFn: async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL}search/${searchContent.searchType}?query=${searchContent.searchTerm}&page=${pageNumber}&api_key=${import.meta.env.VITE_API_KEY}`)
                // console.log(response)
                const results = response.data
                // console.log(results);
                setTotalNumberOfPages(results.total_pages)
                return results.results
            } catch (error) {
                console.log(error);
            }
        }
    })

    const getContentList = useQuery({
        queryKey: ['contentList', requiredContentList, pageNumber],
        queryFn: async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL}${requiredContentList}/popular?page=${pageNumber}&api_key=${import.meta.env.VITE_API_KEY}`)
                // console.log(response)
                setTotalNumberOfPages(response.data.total_pages > 500 ? 500 : response.data.total_pages)
                const result = response.data.results
                // console.log(result);
                return result
            } catch (error) {
                console.log(error);
            }
        }
    })

    // console.log(searchResults.data);
    // console.log(pageNumber);
    // console.log(totalNumberOfPages);

    return <AppContext.Provider value={{ searchContent, setSearchContent, searchResults, setRequiredContentList, getContentList, pageNumber, setPageNumber, totalNumberOfPages }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)