import './styles/App.scss';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { allButtons } from './components/buttons/allButtons';

import Header from './components/fixed/Header';
import Footer from './components/fixed/Footer';
import ListLoader from './views/listLoaders/ListLoader';
import ListButtons from './views/listButtons/ListButtons';
import Detail from './views/detail/Detail';
import Home from './views/home/Home';

function App() {

  const listButtons = allButtons;

  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/listLoaders' element={<ListLoader/>}></Route>
          <Route path='/listButtons' element={<ListButtons listButtons={ listButtons } />}></Route>
          <Route path='/detail/:id' element={<Detail listButtons={ listButtons } />}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
