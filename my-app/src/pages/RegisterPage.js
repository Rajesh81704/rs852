import React from "react";
import { useState } from "react";
const RegisterPage = () => {
  async function register(ev) {
    ev.preventDefault();
  const response=  await fetch("http://localhost:4000/register", {
      method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        
    });
 if(response.status===200){
  alert("Registration Sucessfull");
 }else{
  alert("Registration Faield");

 }
  }
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  return (
    <>
      <form className="register" onSubmit={register}>
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="submit" className="button" value="Register" />
      </form>
    </>
  );
};

export default RegisterPage;
