import React, { useState } from 'react'
import GifCotainer from './GifCotainer';


const Pagination = ({data,forSearch}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const goToNextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    if(data.length==0 && forSearch){
        return <div className='h-96 text-black font-mono'>No result found....</div>
    }
  return (
    <div className='h-96'>
        <GifCotainer data={currentRecords}/>
        <nav className='text-black font-mono flex justify-center p-4'>
            <ul className='space-x-2'>
                <li className=" inline">
                    <button className=' rounded-lg  p-1' onClick={goToPrevPage}>Previous</button>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} onClick={() => setCurrentPage(pgNumber)} 
                        className= {`inline p-2 cursor-pointer ${currentPage == pgNumber ? 'border-b-4 bg-pink-100 border-pink-500' : ''} `} >

                        <a
                            >
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item inline">
                    <button className=' rounded-lg p-1' onClick={goToNextPage}>Next</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination