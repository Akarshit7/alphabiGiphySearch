"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthUserContext } from '@/context/AuthUserContext';
import Search from '@/components/Search';




export default function Home() {
  const { authUser, loading } = useAuthUserContext();
  const router = useRouter();

  useEffect(() => {
    // if the user is not logged in then redirecting the use to the login page
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading]);
  return (
    <>
      <div className='min-h-[100%] flex flex-row items-start'>
      <Search/>
      </div>
      
    </>
  )
}
