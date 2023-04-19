import './styles/App.scss';

import ListLoader from './views/listLoaders/ListLoader';
import ListButtons from './views/listButtons/ListButtons';

function App() {
  return (
    <div className="App">
      <ListLoader/>
      <ListButtons/>
    </div>
  );
}

export default App;
