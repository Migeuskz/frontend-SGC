import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/login.api";


// import { Link } from "react-router-dom";

// import React from "react";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evitar recarga de la página

    try {
      const response = await login({ email, password });
      localStorage.setItem("access_token", response.access_token); // Guardar el token en localStorage
      navigate("/home"); // Redirigir al home
    } catch (err: any) {
      setError(err.message); // Mostrar error si ocurre
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input 
            type="text" 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>

        <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input
          type="submit"
          value="log in"
          onClick={() => {
            navigate("/home");
          }}
        /> */}
        <input type="submit" value="Log in" />
      </form>
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}
