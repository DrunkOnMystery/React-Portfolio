import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css';
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
