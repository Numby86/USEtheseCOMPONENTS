import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import { allButtons } from './components/buttons/allButtons';
import { allCards } from './components/cards/allCards';
import { allCheckboxes } from './components/checkboxes/allCheckboxes'
import { allInputs } from './components/inputs/allInputs';
import { allLoaders } from './components/loaders/allLoaders';
import { allRadios } from './components/radioButtons/allRadios';
import { allToggles } from './components/toggleSwitches/allToggles'

import Header from './components/fixed/Header';
import Footer from './components/fixed/Footer';
import Home from './views/home/Home';
import ErrorPage from './views/error/ErrorPage';

import DetailButton from './views/details/DetailButton';
import DetailCard from './views/details/DetailCard';
import DetailCheckbox from './views/details/DetailCheckbox'
import DetailInput from './views/details/DetailInput';
import DetailLoader from './views/details/DetailLoader';
import DetailRadio from './views/details/DetailRadio';
import DetailToggle from './views/details/DetailToggle';

import ListButtons from './views/lists/ListButtons';
import ListCards from './views/lists/ListCards';
import ListCheckboxes from './views/lists/ListCheckboxes';
import ListInputs from './views/lists/ListInputs';
import ListLoader from './views/lists/ListLoader';
import ListRadios from './views/lists/ListRadios';
import ListToggles from './views/lists/ListToggles';


function App() {

  const disorder = (arr) =>  arr.sort(() => Math.random() - 0.5);
  const listButtons = disorder(allButtons);
  const listCards = disorder(allCards);
  const listCheckboxes = disorder(allCheckboxes);
  const listInputs = disorder(allInputs);
  const listLoaders = disorder(allLoaders);
  const listRadios = disorder(allRadios);
  const listToggles = disorder(allToggles);
  const listAll = [allButtons, allCards, allCheckboxes, allInputs, allLoaders, allToggles];
  const all = disorder(listAll.flat());

  console.log(all);

  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
      <Routes>
          <Route path='/' element={<Home all={all} />}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
          <Route path='/listButtons' element={<ListButtons listButtons={listButtons} />}></Route>
          <Route path='/listCards' element={<ListCards listCards={listCards} />}></Route>
          <Route path='/listCheckboxes' element={<ListCheckboxes listCheckboxes={ listCheckboxes } />}></Route>
          <Route path='/listInputs' element={<ListInputs listInputs={listInputs} />}></Route>
          <Route path='/listLoaders' element={<ListLoader listLoaders={listLoaders} />}></Route>
          <Route path='/listRadios' element={<ListRadios listRadios={listRadios} />}></Route>
          <Route path='/listToggles' element={<ListToggles listToggles={listToggles} />}></Route>

          <Route path='/detailButton/:id' element={<DetailButton listButtons={listButtons} />}></Route>
          <Route path='/detailCard/:id' element={<DetailCard listCards={listCards} />}></Route>
          <Route path='/detailCheckbox/:id' element={<DetailCheckbox listCheckboxes={listCheckboxes} />}></Route>
          <Route path='/detailInput/:id' element={<DetailInput listInputs={listInputs} />}></Route>
          <Route path='/detailLoader/:id' element={<DetailLoader listLoaders={listLoaders} />}></Route>
          <Route path='/detailRadio/:id' element={<DetailRadio listRadios={listRadios} />}></Route>
          <Route path='/detailToggle/:id' element={<DetailToggle listToggles={listToggles} />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
