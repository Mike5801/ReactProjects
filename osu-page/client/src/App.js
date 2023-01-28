import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeatmapPage from 'scenes/beatmapPage';
import HomePage from 'scenes/homePage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/beatmaps' element={ <BeatmapPage /> }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
