"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { useAuthUserContext } from "@/context/AuthUserContext";


const Login = () => {
  const router = useRouter();
  const [isButtonDisabled, setButtonDisableState] = useState(false);
  const {authUser,signIn} = useAuthUserContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    signIn(user.email,user.password)
    .catch((error)=>{
      console.log(error);
    })
  };

  useEffect(() => {
    // if the user is logged in then redirecting the user to the home page
    if (authUser) router.push("/");
  }, [authUser]);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisableState(false);
    } else {
      setButtonDisableState(true);
    }
  }, [user]);


  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl mb-4">Login</h1>
        <hr />
        <label htmlFor="password">Email</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter email"
        />
        <label htmlFor="email">Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
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
};

export default Login;
