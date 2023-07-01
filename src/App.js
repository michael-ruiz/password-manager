import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ViewPasswords from './components/ViewPasswords';
import AddPassword from './components/AddPassword';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/view" element={<ViewPasswords/>}/>
      <Route exact path="/add" element={<AddPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}