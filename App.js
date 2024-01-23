import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Project/Home';
import Login from './Project/Login';
import LoginDoc from './Project/loginDoc';
import Navigation from './Project/Navigation';

function App() {
  return (
    <>
        
        <BrowserRouter>
        <Navigation/>
        </BrowserRouter>
    </>
  );
}

export default App;
