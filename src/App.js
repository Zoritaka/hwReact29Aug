import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Biography from './pages/Biography';
import FavoriteMovie from './pages/FavoriteMovie';
import Pet from './pages/pet';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Biography/>}></Route>
        <Route exact path="/FavoriteMovie" element={<FavoriteMovie/>}></Route>
        <Route exact path="/Pet" element={<Pet/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
