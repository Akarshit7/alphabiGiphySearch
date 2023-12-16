
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import Gifcard from './Gifcard';
import { addItem, removeItem } from '@/lib/store/favourites';
import GifCotainer from './GifCotainer';


const Favourites = () => {
    const {total,favorites} = useSelector((state)=>state.favorites);
  return (
    <div className='bg-white rounded-lg'>
    <GifCotainer data={favorites}/>
    </div>
  )
}

export default Favourites