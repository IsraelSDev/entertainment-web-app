import React from 'react';
import "./ButtonCustom.sass";

const ButtonCustom = (props) => {

  const { btnTitle } = props;

  return (
    <div className='ButtonCustomContainer'>
      <button type='submit' className={'ButtonCustom'}>{btnTitle ? `${btnTitle} to your account` : "Login to your account"}</button>
    </div>
  );
}

export default ButtonCustom;
