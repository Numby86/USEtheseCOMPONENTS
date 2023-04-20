import './styles/App.scss';

import ListLoader from './views/listLoaders/ListLoader';
import ListButtons from './views/listButtons/ListButtons';
import Detail from './views/detail/Detail';

function App() {
  return (
    <div className="App">
      <Detail/>
      {/* <ListLoader/>
      <ListButtons/> */}
    </div>
  );
}

export default App;
