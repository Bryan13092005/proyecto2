import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (email.trim() === "" || password.trim() === "") {
      alert("Completa todos los campos");
      return;
    }

    // Cuenta para admin
    if (email === "admin@gmail.com" && password === "1234") {
      console.log("Login exitoso. Redirigiendo a /dashboard");
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-label="Correo electrónico"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          aria-label="Contraseña"
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;