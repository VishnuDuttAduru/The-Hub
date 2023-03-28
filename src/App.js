import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </Container>
      </div>
        <SimpleBottomNavigation/>
    </>
  );
}

export default App;
