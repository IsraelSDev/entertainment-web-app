import './InputForm.sass';

import React from 'react';

let error = "Error";

const InputForm = (props) => {

  const { type, title } = props;
  const handleType = (type) => { type = type ? type : "text"; return type }
  const handleTitle = (title) => { title = title ? title : "Insira um Título"; return title }

  return (
    <div className={'InputForm'}>
      <input type={handleType(type)} autoComplete={type} placeholder={handleTitle(title)} />
    </div>
  );
}

export default InputForm;
