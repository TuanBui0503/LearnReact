import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import './Heading.jsx'
import Heading from "./Heading";
import A from "./Section";
import ChangeColor from "./ChangeColor";
import Quest from "./Quest";
import Info from "./Baitapinput";
///import './Section.jsx'
import Test from "./Props";

function App() {
  return (
    <>
      <Heading />
      <A />
      <ChangeColor />
      <Quest />

      <Info />
      <Test 
      label = "Nhập email"
      type = "email"
      placeholder = "đây là email"
      onFocus = {() => {
        console.log(Math.random());
        
        ;
      }}
      />
    </>
  );
}

export default App;
