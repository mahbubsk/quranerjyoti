
import React from 'react';
import './App.css';
import Logo from './assets/logo 2.svg'
import MouseGif from './components/MouseGif'
import Navbar from './components/Navbar/Navbar';
import Posts from './components/pages/Posts';
function Header() {

  return (
    <div >
      <Navbar/>
      <header  className="App-header">
        <div className="app-logo"> 
          <img src={Logo} alt="logo for this size"/>
        </div>
        
          <div className="app-title">
            কুরআনের জ্যোতি
          </div>
          <p className="app-subtitle">
            পরিচালনা: শায়খ উমায়ের কোব্বাদী

          </p>
          <MouseGif />
      </header>
      <section>
        <Posts/>
      </section>
    </div>
  );
}

export default Header;
