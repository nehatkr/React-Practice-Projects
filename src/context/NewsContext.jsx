import React, { Children, useState } from 'react'
import { createContext } from 'react'

const NewsContext = createContext(null);

const NewsContextProvider = ({Children}) =>{
    const [news, setNews] = useState([]);
    const value = {
        news,
        setNews
    }
    return(
        <NewsContext.Provider value={value}>
            {Children}
        </NewsContext.Provider>
    )
}


export default NewsContextProvider;