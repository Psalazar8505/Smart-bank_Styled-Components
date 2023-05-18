import React from "react";
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {  
  const [tema, setTema] = useState(true);  

  useEffect (() => {
    let data = localStorage.getItem("theme")
    
    if (data) {
      setTema(JSON.parse(data) )
    }
  },[  ])

  function toggleTema() {
    setTema((tema) => !tema);
  } 

  useEffect (() => {
    localStorage.setItem("theme", tema)
    console.log(tema)
  },[ tema ])
  
  return (
    <ThemeProvider  theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
