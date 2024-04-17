import { createContext, useContext, useState } from "react";
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [popularContent, setPopularContent] = useState()

    const fetchContentData = async (requiredContent) => {
        // console.log(requiredContent);

        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}${requiredContent}?api_key=${import.meta.env.VITE_API_KEY}`)
            const { results } = response.data
            setPopularContent(results) 
        } catch (error) {
            console.log(error);
        }
    }

    return <AppContext.Provider value={{fetchContentData, popularContent}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)