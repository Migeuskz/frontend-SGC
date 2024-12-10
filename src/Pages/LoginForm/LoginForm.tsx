import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

// import React from "react";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <label htmlFor="">correo</label>
        <input type="text" />
        <label htmlFor="">password</label>
        <input type="password" name="" id="" />
        <input
          type="submit"
          value="log in"
          onClick={() => {
            navigate("/home");
          }}
        />
      </form>
    </div>
  );
}
