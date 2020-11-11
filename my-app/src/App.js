import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
