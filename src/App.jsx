import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Landing from './components/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App
