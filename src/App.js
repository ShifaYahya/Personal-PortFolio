
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import NavBar from './Pages/Home/NavBar';
function App() {
  return (
   <>
   <Router>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="**" element={<div>404 not found</div>}></Route>  
      </Routes>
    </div>
   </Router>
   </>
  );
}

export default App;
