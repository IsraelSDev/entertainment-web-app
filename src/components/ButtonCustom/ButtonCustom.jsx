import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/authenticatorContext';
import "./ButtonCustom.sass";

const ButtonCustom = (props) => {

  const { isAuthenticated, setIsAuthenticated } = useContext(authContext);
  const { btnTitle } = props;

  console.log(isAuthenticated);

  return (
    <div className='ButtonCustomContainer'>
      <button type='submit' className={'ButtonCustom'} onClick={
        () => {
          setIsAuthenticated(true);
          <Navigate to="/home" />
        }
      }>{btnTitle ? `${btnTitle} to your account` : "Login to your account"}</button>
    </div>
  );
}

export default ButtonCustom;
