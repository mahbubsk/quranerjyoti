
import React from 'react';
import Logo from '../../../assets/logo 2.svg'
import MouseGif from '../../MouseGif'
import Navbar from '../../Navbar/Navbar';
// import Posts from './components/pages/Posts';
import Book from './Book';
import { Container } from '@mui/material';
function Books() {

  return (
    <div >
      <Navbar/>
      <Container>
        
        <section>
          <Book/>
        </section>
      </Container>
      
    </div>
  );
}

export default Books;
