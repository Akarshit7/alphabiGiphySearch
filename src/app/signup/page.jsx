"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useAuthUserContext } from "@/context/AuthUserContext";

export const SignUp = () => {
  const router = useRouter();
  const [isButtonDisabled, setButtonDisableState] = useState(false);
  const { signUp, authUser,loading } = useAuthUserContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSignUp = (e) => {
    e.preventDefault();
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (user.confirmPassword === user.password && user.password.length != 0) {
      signUp(user.email, user.password)
        .then((authUser) => {
          toast.success("Sign up successful");
          router.push("/");
        })
        .catch((error) => {
          if(error.code = "auth/email-already-in-use"){
            toast.error("Email already in Use")
          }
          else{
          toast.error("An Error ocurred.Please try again")}
        });
    } else toast.error("Password did not match");
  };


  useEffect(() => {
    // if the user is logged in then redirecting the user to the home page
    if (authUser) router.push("/");
  }, [authUser]);
  

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
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
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <h1 className="text-4xl mb-4">SignUp</h1>
        <hr />
        <label htmlFor="username">Email</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="email"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
        />
        <label htmlFor="email">Confirm Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-red-400"
          type="password"
          id="email"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          placeholder="Enter Password Again"
        />
        <button
          className="self-center p-4 bg-white text-black rounded-lg mt-3 mb-3"
          type="submit"
          onClick={onSignUp}
        >
          {isButtonDisabled ? "Enter Values" : "SignUp"}
        </button>
        <Link href={"/login"}>Visit Login Page</Link>
      </div>
    </>
  );
};

export default SignUp;
