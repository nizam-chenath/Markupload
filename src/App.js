
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom'
import Register from './components/Register';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
       < Navbar/>
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/edit/:id" element={<Edit/>}/>
       </Routes>
     
    </div>
  );
}

export default App;
