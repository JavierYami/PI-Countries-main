import './App.css';
import {Routes, Route} from   'react-router-dom'
import { useLocation } from 'react-router-dom';
import LandingPage from './Components/LandingPage';

function App() {

  const location = useLocation();
  
  return (
    <div className="App">
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
