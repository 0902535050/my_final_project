// racf
import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className='text-right'>
            <ul className='pagination'>
                {pageNumber.map(number => (
                    <li key={number} className='page-item' >
                        <button onClick={() => paginate(number)} className='page-link text-dark'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
