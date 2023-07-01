import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}