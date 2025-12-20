import { HashRouter, Routes, Route,BrowserRouter  } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register.jsx';
import Landing from './components/landing/Landing';

const basename =
  window.location.hostname.includes("github.io")
    ? "/proyecto2"
    : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
  <Routes>
    <Route index element={<Landing />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
