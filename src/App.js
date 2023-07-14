 
import './App.css';
import Login from './pages/Login'
import Planet from './pages/Planet'
import { Route,Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/planet' element={<Planet/>}/>
        </Routes>
    </div>
  );
}

export default App;
