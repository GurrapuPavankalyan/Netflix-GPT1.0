//import React from 'react';

export const checkValidData = (email, password) => {

   /// const isFullNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   // if(!isFullNameValid) return "Full Name is not valid";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

};

//export default checkValidData;