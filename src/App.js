import './App.css';
import {Routes, Route} from 'react-router-dom';
import Greeting from './component/Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/greeting" element={<Greeting />}/>
      </Routes>
    </div>
  );
}

export default App;
