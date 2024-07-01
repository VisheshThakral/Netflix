import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    password.current.type = showPassword ? "password" : "text";
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (!isSignInForm && !name.current.value) {
      setErrorMessage("Name is not valid");
      return;
    }
    const message = checkValidateData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      console.log("working");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D5603AQG-DHGyl5hNFA/profile-displayphoto-shrink_200_200/0/1705678371447?e=2147483647&v=beta&t=BFUwAAwxMOS-hFjLTXNQXUaiY72S-usWbvrFbeHZtmE",
          })
            .then(() => {
              navigate("/browse");
              console.log(user);
            })
            .catch((error) => {
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-16 bg-black w-3/12 mx-auto left-0 right-0 my-36 text-white opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <div className="relative w-full">
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-700 pr-10"
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <i
              className={`fas ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } text-gray-400`}
            ></i>
          </span>
        </div>
        <p className="text-red-500 py-2">{errorMessage}</p>
        <button
          className="p-3 my-4 w-full bg-red-700 font-bold"
          onClick={handleButtonClick}
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="font-semibold">Sign Up Now.</span>
            </>
          ) : (
            "Already registered? Sign In Now..."
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
