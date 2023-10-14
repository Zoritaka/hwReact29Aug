import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Biography from './pages/Biography';
import FavoriteMovie from './pages/FavoriteMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Biography/>}></Route>
        <Route exact path="/FavoriteMovie" element={<FavoriteMovie/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
