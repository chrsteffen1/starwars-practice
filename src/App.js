import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className="App">
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='id-card'>
        <Routes>
          <Route path='/' element={<StarshipList />} />
          <Route path='/starship' element={<StarshipDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
