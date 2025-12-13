import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {
   
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <Wrapper>
    <div className=' max-w-full w-fit flex  gap-5 m-auto overflow-auto px-4 scrollbar-none'>
       { categories.map((Category)=>{
        return(

            <button key={Category} className="btn btn-primary">{Category}</button>
        )
       })}
      
    </div>
    </Wrapper>
  )
}

export default Category
