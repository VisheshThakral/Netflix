import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className={
        "fixed top-0 left-0 right-0 flex items-center justify-between px-8 bg-gray-800 z-30 " +
        (!isScrolled ? "opacity-80" : "")
      }
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
    >
      <div className="flex">
        <a href="/browse" className="flex items-center">
          <img className="w-32 md:w-44" src={LOGO} alt="Netflix Logo" />
        </a>

        {user && (
          <ul className="flex ml-4 items-center space-x-6 text-white">
            <li className="navigation-menu">
              <a
                className="menu-trigger"
                role="button"
                aria-haspopup="true"
                href="/browse"
                tabIndex="0"
              >
                Browse
              </a>
            </li>
            <li className="navigation-tab">
              <a href="/browse" className="current active">
                Home
              </a>
            </li>
            <li className="navigation-tab">
              <a href="/browse/genre/83">TV Shows</a>
            </li>
            <li className="navigation-tab">
              <a href="/browse/genre/">Movies</a>
            </li>
          </ul>
        )}
      </div>
      {user && (
        <div className="flex items-center space-x-4 text-white">
          <div className="relative">
            {isSearching ? (
              <div className="searchBox">
                <div className="duration-300 transition ease-in delay-300">
                  <div className="absolute top-[5px] left-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      data-icon="MagnifyingGlassStandard"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="searchInput"
                    name="searchInput"
                    placeholder="Titles, people, genres"
                    maxLength="80"
                    className="opacity-100 focus:outline-none bg-black border-solid border-[1px] border-white p-1 pl-10 pr-14 mr-5"
                  />
                </div>
              </div>
            ) : (
              <button
                className="focus:outline-none"
                tabIndex="0"
                aria-label="Search"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            )}
          </div>
          <div className="relative">
            <div className="account-dropdown-button">
              <a
                href="/YourAccount"
                role="button"
                tabIndex="0"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Account & Settings"
              >
                <span className="profile-link" role="presentation">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.photoURL}
                    alt="User Profile"
                  />
                </span>
              </a>
              <span className="caret" role="presentation"></span>
            </div>
          </div>
          <div className="relative cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
