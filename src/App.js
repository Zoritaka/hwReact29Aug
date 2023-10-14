import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Biography from './pages/Biography';
import FavoriteMovie from './pages/FavoriteMovie';
import Pet from './pages/pet';
import Timer from './pages/timer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Biography/>}></Route>
        <Route exact path="/FavoriteMovie" element={<FavoriteMovie/>}></Route>
        <Route exact path="/Pet" element={<Pet/>}></Route>
        <Route exact path="/Timer" element={<Timer/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
