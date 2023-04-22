import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import { allButtons } from './components/buttons/allButtons';
import { allLoaders } from './components/loaders/allLoaders';

import Header from './components/fixed/Header';
import Footer from './components/fixed/Footer';
import ListLoader from './views/listLoaders/ListLoader';
import ListButtons from './views/listButtons/ListButtons';
import DetailButton from './views/detail/DetailButton'
import DetailLoader from './views/detail/DetailLoader'
import Home from './views/home/Home';

function App() {

  const listButtons = allButtons;
  const listLoaders = allLoaders;

  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/listLoaders' element={<ListLoader listLoaders={listLoaders} />}></Route>
          <Route path='/listButtons' element={<ListButtons listButtons={listButtons} />}></Route>
          <Route path='/detailButton/:id' element={<DetailButton listButtons={listButtons} />}></Route>
          <Route path='/detailLoader/:id' element={<DetailLoader listLoaders={listLoaders} />}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
