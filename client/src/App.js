import './App.css';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import FormPage from './Components/FormPage/FormPage';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';



function App() {

  const location = useLocation();

  
  return (

    <div className="App">
      {location.pathname === '/' ? <LandingPage/> : <NavBar/>}
      <Routes>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/create' element={<FormPage/>}/>
      </Routes>
    </div>
  );

}

export default App;
