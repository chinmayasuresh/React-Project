import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Buy from './components/Buy';
function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Main/>}   />
<Route path="/add" element={<Add/>}   />
<Route path="/search" element={<Search/>}   />
<Route path="/view" element={<View/>}   />
<Route path="/buy" element={<Buy/>}   />
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
