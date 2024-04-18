import { createContext, useContext, useState } from "react";
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [selectedContent, setSelectedContent] = useState()

    const fetchContentData = async (requiredContent) => {
        // console.log(requiredContent);

        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}${requiredContent}?api_key=${import.meta.env.VITE_API_KEY}`)
            // console.log(response);
            const result = response.data.results || response.data
            // console.log(result);
            setSelectedContent(result) 
        } catch (error) {
            console.log(error);
        }
    }

    return <AppContext.Provider value={{fetchContentData, selectedContent}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)