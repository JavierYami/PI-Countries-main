import './App.css';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import FormPage from './Components/FormPage/FormPage';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import DetailPage from './Components/DetailPage/DetailPage';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';



function App() {

  const location = useLocation(); 

  
  return (

    <div className="App">
      {location.pathname === '/' ? '' : <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/create' element={<FormPage/>}/>
        <Route path='/homepage/:id' element={<DetailPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {location.pathname === '/' || <Footer/>}
    </div>
  );

}

export default App;
