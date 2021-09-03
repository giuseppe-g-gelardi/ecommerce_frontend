import React, { useState } from 'react';
import './Form.css';
import FormSuccess from '../FormSuccess/FormSuccess';
import FormSignup from '../FormSignup/FormSignup';
import FormLogin from '../FormLogin/FormLogin';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }

  // function login() {
  //   setIsLoggedIn(true);
  // }

  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          {/* <img className='form-img' src='' alt='' /> insert image here */}
        </div>

        

        {/* {!isLoggedIn} ? (
          <FormLogin login={login} />
        )  */}


        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}



      </div>
    </>
  );
};

export default Form;