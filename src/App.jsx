import { HashRouter, Routes, Route,BrowserRouter  } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register.jsx';
import Landing from './components/landing/Landing';

function App() {
  return (

<BrowserRouter basename="/proyecto2">
  <Routes>
    <Route index element={<Landing />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
