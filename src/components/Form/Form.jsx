import React from 'react';
import { Link } from 'react-router-dom';
import "./Form.sass";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import InputForm from "../InputForm/InputForm";
import movieSVG from '../../assets/movie.svg';


const Form = (props) => {

  const { type } = props;

  return (
    <div className='Form'>
      <img src={movieSVG} alt='movie-logo' />
      <div className='form-container'>
        {type === 'login' ? (
          <form >
            <h1>Login</h1>
            <InputForm type="email" title="Email adress" />
            <InputForm type="password" title="Password" />
            <ButtonCustom />
            <h6>Don't have and account?  <span id='event'><Link to="/signup">Sign Up</Link></span></h6>
          </form>
        ) : (
          <form >
            <h1>Sign Up</h1>
            <InputForm type="email" title="Email adress" />
            <InputForm type="password" title="Password" />
            <InputForm type="password" title="Repeat Password" />
            <ButtonCustom btnTitle="Create" />
            <h6>Don't have and account?  <span id='event'><Link to="/Login">Login</Link></span></h6>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
