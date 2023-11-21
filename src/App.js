import {Routes,Route} from 'react-router-dom';
import './App.css';
import './style.css'
import Word from './components/Word';
import Wordmeaning from './pages/Wordmeaning';

function App() {
  return (
    <div className="App">
      <Word/>
      <Routes>
        <Route path='/searchword/:word' element={<Wordmeaning/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
