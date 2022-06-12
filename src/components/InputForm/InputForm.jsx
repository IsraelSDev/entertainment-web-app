import './InputForm.sass';

import React from 'react';

let errorMessage = "Can't be empty";

const InputForm = (props) => {
  let isEmpty = false;

  const handleEmpty = (e) => {
    let value = e.target.value;
    if (value === '') {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
  }

  const btnSubmit = document.querySelector('.ButtonCustom');
  btnSubmit.addEventListener('click', () => {
    // if (isEmpty) {
    // }
  })

  const { type, title } = props;
  const handleType = (type) => { type = type ? type : "text"; return type }
  const handleTitle = (title) => { title = title ? title : "Insira um Título"; return title }

  return (
    <div className={'InputForm'} id="inputForm">
      <input required type={handleType(type)} autoComplete={type} placeholder={handleTitle(title)} onChange={(e) => {
        handleEmpty(e);
      }} />
      <span className='hidden' id="error_message">{errorMessage}</span>
    </div >
  );
}

export default InputForm;
