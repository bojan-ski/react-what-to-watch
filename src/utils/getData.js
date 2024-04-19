import axios from "axios"

export const getContentData = async (requiredContent) => {
    // console.log(requiredContent);

    try {
        const response = await axios.get(`${import.meta.env.VITE_URL}${requiredContent}?api_key=${import.meta.env.VITE_API_KEY}`)
        // console.log(response);
        const result = response.data.results || response.data
        // console.log(result);
        return result
    } catch (error) {
        console.log(error);
    }
}