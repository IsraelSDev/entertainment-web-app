import React from 'react';
import { Link } from 'react-router-dom';
import "./Form.sass";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import InputForm from "../InputForm/InputForm";
import movieSVG from '../../assets/movie.svg';


const Form = (props) => {
  return (
    <div className='Form'>
      <img src={movieSVG} alt='movie-logo' />
      <div className='form-container'>
        <form >
          <h1>{props.title}</h1>
          <InputForm />
          <InputForm />
          <ButtonCustom />
          <h6>{props.option} have and account?  <span id='event'><Link to={`/${props.to}`}>{props.optionEvent}</Link></span></h6>
        </form>
      </div>
    </div>
  );
}

export default Form;
