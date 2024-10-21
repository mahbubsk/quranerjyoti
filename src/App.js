
import React from 'react';
import './App.css';
// import logo from './assets/logo 2.svg'
// import MouseGif from './components/MouseGif'
import Posts from './components/pages/Posts'
// import Navbar from './components/Navbar';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Post from './components/pages/Posts/Post';
import PostDetails from './components/pages/Posts/PostDetails';
import Books from './components/pages/book/Books';
function App() {




  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/postDetails/:id" element={<PostDetails/>}/>
          <Route path="/books" element={<Books/>} />
        </Routes>


    </div>
  );
}

export default App;
