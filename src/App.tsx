import './App.css';
import HomePage from './pages/HomePage';
import { Routes as Switch, Route } from 'react-router-dom';
import CarsPage from './pages/CarsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/" element={<HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
