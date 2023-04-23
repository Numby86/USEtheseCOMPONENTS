import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import { allButtons } from './components/buttons/allButtons';
import { allCards } from './components/cards/allCards';
import { allInputs } from './components/inputs/allInputs';
import { allLoaders } from './components/loaders/allLoaders';
import { allToggles } from './components/toggleSwitches/allToggles'

import Header from './components/fixed/Header';
import Footer from './components/fixed/Footer';
import Home from './views/home/Home';

import DetailButton from './views/details/DetailButton';
import DetailCard from './views/details/DetailCard';
import DetailInput from './views/details/DetailInput';
import DetailLoader from './views/details/DetailLoader';
import DetailToggle from './views/details/DetailToggle';

import ListButtons from './views/lists/ListButtons';
import ListCards from './views/lists/ListCards';
import ListInputs from './views/lists/ListInputs';
import ListLoader from './views/lists/ListLoader';
import ListToggles from './views/lists/ListToggles';


function App() {

  const listButtons = allButtons;
  const listCards = allCards;
  const listInputs = allInputs;
  const listLoaders = allLoaders;
  const listToggles = allToggles;

  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/listButtons' element={<ListButtons listButtons={listButtons} />}></Route>
          <Route path='/listCards' element={<ListCards listCards={listCards} />}></Route>
          <Route path='/listInputs' element={<ListInputs listInputs={listInputs} />}></Route>
          <Route path='/listLoaders' element={<ListLoader listLoaders={listLoaders} />}></Route>
          <Route path='/listToggles' element={<ListToggles listToggles={listToggles} />}></Route>

          <Route path='/detailButton/:id' element={<DetailButton listButtons={listButtons} />}></Route>
          <Route path='/detailCard/:id' element={<DetailCard listCards={listCards} />}></Route>
          <Route path='/detailInput/:id' element={<DetailInput listInputs={listInputs} />}></Route>
          <Route path='/detailLoader/:id' element={<DetailLoader listLoaders={listLoaders} />}></Route>
          <Route path='/detailToggle/:id' element={<DetailToggle listToggles={listToggles} />}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
