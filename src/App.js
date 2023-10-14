import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Biography from './pages/Biography';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Biography/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
