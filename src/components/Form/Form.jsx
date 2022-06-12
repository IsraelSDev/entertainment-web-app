import React from 'react';
import "./Form.sass";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import InputForm from "../InputForm/InputForm";


const Form = () => {
  return (
    <div className='form-container'>
      <form >
        <InputForm />
        <InputForm />
        <ButtonCustom />
      </form>
    </div>
  );
}

export default Form;
