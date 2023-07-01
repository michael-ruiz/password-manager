import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import auth from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    if (document.getElementById("emailField").value !== "" && document.getElementById("passwordField").value !== "") {
      try{
        await signInWithEmailAndPassword(auth, email, password);
      }
      catch(e){
        alert("Login failed, please try again");
        console.log(e);
      }
    }
    else {
      alert("Please enter a valid email and password");
    }

  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser)
    {
      const db = getDatabase();
      const pref = ref(db, 'Passwords');
    
      onValue(pref, (snapshot) => {
        const data = JSON.stringify(snapshot.val());
        localStorage.setItem('passwords', data);
      });

      navigate('/home');
    }
  });

  return (
    <div className="login">
      <h2 className='loginHeader'>Log In</h2>
      <ul className="loginList">
        <li className="listElemText">
        <label>Email </label>
        <input id="emailField" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </li>
        <li className="listElemText">
        <label>Password </label>
        <input id="passwordField" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </li>
        <li className="listElemBtn">
          <button id="loginBtn" onClick={handleLogIn}>Log In</button>
        </li>
      </ul>
    </div>
  )
}