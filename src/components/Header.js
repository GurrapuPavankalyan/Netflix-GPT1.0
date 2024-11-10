import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
//import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/error");
      //navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT search 
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
             const {uid, email, displayName, photoURL} = user;
             dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));  
             navigate("/browse");     
            } else {
              // User is signed out
             dispatch(removeUser());
             navigate("/");
            }
          });

          // Unsubscribe when component unmounts
          return () => unsubscribe();
    }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between w-screen">
        <img 
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
         />
        {user && (
          <div className="flex p-2 justify-between">
            {showGptSearch && (
              <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
              </select>
            )}  
            <button className='py-2 px-4 m-4 my-2 bg-purple-600 text-white rounded-md'
            onClick={handleGptSearchClick}>
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <img 
            className="hidden md:block w-12 h-12"
            alt='user-icon'
            src={user?.photoURL}
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              (sign Out)
            </button>
        </div>
        )}
    </div>
  );
};

export default Header;