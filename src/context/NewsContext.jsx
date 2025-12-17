/* eslint-disable react-refresh/only-export-components */
import React, { Children, useContext, useState } from 'react'
import { createContext } from 'react'
// create context
const NewsContext = createContext(null);

// Provide context
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

const useNewsContext = () => {
  return useContext(NewsContext);
};

export {NewsContextProvider, useNewsContext};