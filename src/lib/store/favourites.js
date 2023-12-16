
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  total: 0,
  isLoading: true,
};

const favSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers:{
    clearAll:(state)=>{
        state.favorites  = []
        state.total =0;
    },
    addItem:(state,{payload})=>{
        const gif = payload;
        const findGif = state.favorites.find((ele)=>ele.id===gif.id);
        
        if(!findGif){
          state.favorites.push(gif);
          state.total +=1 
        }
        
    },
    removeItem:(state,{payload})=>{
        const gifId = payload.id;
        state.favorites = state.favorites.filter((ele)=>ele.id!==gifId);
        if(state.total>=1){
          state.total -=1;
        };
    }

  }
});

export const {clearAll,removeItem,addItem} = favSlice.actions;

export default favSlice.reducer;