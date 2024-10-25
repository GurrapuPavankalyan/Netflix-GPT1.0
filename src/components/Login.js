import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    // signIn / signUp Logic
    if(!isSignInForm){
      // SignUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const { uid, email, displayName } = auth.currentUser;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: "c:\Users\GURRAPU PAVAN KALYAN\Downloads\Netflix profile icon.png" }));
      //navigate("/browse");
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;  
    //navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }

  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className="absolute">
          <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg'
          alt='background-Image'
           />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl p-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && 
             <input
              ref={name} 
              type="text"
              placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"
             />
          }
          <input 
            ref={email}
            type="text"
            placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"
           />            
          <input
           ref={password}
           type="password"
           placeholder="Password"
           className="p-4 my-4 w-full bg-gray-700"
           />
           <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
          <button
           className="p-4 my-6 cursor-pointer bg-red-700 w-full rounded-lg"
           onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
           className="py-4"
           onClick={toggleSignInForm}
          >
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}            
          </p>
        </form>       
    </div>
  );
};

export default Login;
