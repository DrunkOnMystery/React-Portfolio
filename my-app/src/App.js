import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <div class="app">
      <Header />
      <Routes />
      <Footer />
      </div>
    </div>
  );
}

export default App;
