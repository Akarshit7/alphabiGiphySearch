
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { addItem, removeItem ,clearAll} from '@/lib/store/favourites';
import GifCotainer from './GifCotainer';
import Pagination from './Pagination';


const Favourites = () => {
    const {total,favorites} = useSelector((state)=>state.favorites);
    const dispatcher = useDispatch()
  return (
    <div className=' bw-screen p-4 rounded-xl drop-shadow-2xl bg-white mt-7 mx-32 '>
        <div className='text-black font-bold text-3xl flex justify-between'>
        <div>My Favourites: {total ? total : ""}</div>
        {total ? <button onClick={()=>{
            dispatcher(clearAll())
        }}
        className='text-base bg-black p-2 font-normal rounded-lg text-white'>Clear All</button> :""}
        </div>
    {favorites.length===0 ? <div className='text-black font-bold text-3xl' >
        <p className='font-mono font-normal text-base'>Start discovering your favorites! 
            Search and mark items as favorites to build your personalized collection.
           </p>
    </div> :
    <Pagination data={favorites} forSearch={false}/>
    }
    
    </div>
  )
}

export default Favourites