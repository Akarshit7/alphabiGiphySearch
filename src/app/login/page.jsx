"use client"

import React,{useState} from 'react';
import { useRouter } from 'next/navigation';
import { Toaster,toast } from 'react-hot-toast';
import Link from 'next/link';


const Login = () => {
  const router = useRouter();
  const [isButtonDisabled, setButtonDisableState] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = ()=>{

  }




  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl mb-4">Login</h1>
        <hr />
        <label htmlFor="password">password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
        />
        <label htmlFor="email">email</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter email"
        />
        <button
          className="self-center p-4 bg-white text-black rounded-lg mt-3 mb-3"
          type="submit"
          onClick={onLogin}
        >
          {isButtonDisabled ? "Enter data" : "Login"}
        </button>
        <Link href={"/signup"}>Visit SignUp Page</Link>
      </div>
    </>
  );
}

export default Login;
