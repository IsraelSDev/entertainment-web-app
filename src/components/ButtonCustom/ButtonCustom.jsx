import React from 'react';
import "./ButtonCustom.sass";

const ButtonCustom = (props) => {

  const { btnTitle } = props;

  return (
    <div className='ButtonCustomContainer'>
      <button className={'ButtonCustom'}>{btnTitle ? "" : "Login to your account"}</button>
    </div>
  );
}

export default ButtonCustom;
