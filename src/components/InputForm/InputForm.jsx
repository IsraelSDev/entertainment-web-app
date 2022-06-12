import './InputForm.sass';
import $ from 'jquery';

import React from 'react';

let errorMessage = "Can't be empty";

const InputForm = (props) => {

  const { type, title } = props;
  const handleType = (type) => { type = type ? type : "text"; return type }
  const handleTitle = (title) => { title = title ? title : "Insira um Título"; return title }

  return (
    <div className='InputForm'>
      <input required type={handleType(type)} autoComplete={type} placeholder={handleTitle(title)} />
      <span className='hidden' id="error_message">{errorMessage}</span>
    </div >
  );
}

export default InputForm;
