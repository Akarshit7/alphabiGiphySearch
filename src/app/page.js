"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthUserContext } from '@/context/AuthUserContext';
import Search from '@/components/Search';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import Favourites from '@/components/Favourites';




export default function Home() {
  const { authUser, loading,logOut } = useAuthUserContext();
  const router = useRouter();

  useEffect(() => {
    // if the user is not logged in then redirecting the use to the login page
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);
  return (
    <Provider store={store}>
    <>
    <div className=' flex place-content-end p-2'>
      <button className='bg-black p-3 font-bold rounded-lg ' onClick={()=>{logOut()}}>Logout</button>;
    </div>
    <h1 className='font-sans font-bold text-center p-1 text-black text-4xl m-1'>GIPHY gif Searcher</h1>
      <div className='min-h-[100%] flex flex-row items-start'>
        
      <Search/>
      </div>
      <div>
      <Favourites/>
      </div>
      
    </>
    </Provider>
  )
}
