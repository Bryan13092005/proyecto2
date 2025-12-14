import { HashRouter, Routes, Route  } from "react-router-dom";
import Login from './components/login/Login';
import Register from './components/register/Register.jsx';
import Landing from './components/landing/Landing';

function App() {
  return (

<HashRouter>
  <Routes>
    <Route index element={<Landing />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Routes>
</HashRouter>
  );
}

export default App;
