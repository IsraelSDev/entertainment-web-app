import React from "react";
import "./App.sass";
import Search from "./Search/Search";
import InputForm from "./InputForm/InputForm";
import ButtonCustom from "./ButtonCustom/ButtonCustom";

function App() {
  return (
    <div className="App">
      <Search />
      <InputForm title="Email adress: " />
      <InputForm title="Password " type="password" />
      <InputForm title="Repeat password " type="password" />
      <ButtonCustom />
    </div>
  );
}

export default App;
