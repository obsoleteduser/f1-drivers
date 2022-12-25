import React from 'react'
import './pagination.css'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i= 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }


    return(
        <nav>
        
            {pageNumbers.map(number=>(
                <span key={number}>
                    <div onClick={()=>{paginate(number)}} >
                        {number}
                    </div>
                    </span>
            ))
            }
        
    </nav> 
    )



}