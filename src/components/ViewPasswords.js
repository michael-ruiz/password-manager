import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function ViewPasswords() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/")
  });

  function GetInfo() {
    let sites = JSON.parse(localStorage.getItem('passwords'));
    let arr = [];

    for (let item in sites){
      let obj = sites[item];
      let row = (<tr>
        <th>{item}</th>
        <th>{obj['email']}</th>
        <th>{obj['password']}</th>
      </tr>);
      arr.push(row);
    }
    
    return (
      <>{arr}</>
    )
  }

  return (
    <>
      <div>{user?.email}</div>
      <table>
        <thead>
          <tr>
            <th>Sites</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <GetInfo/>
        </tbody>
      </table>
      <div>
        <Link to="/home">
            <button>Back</button>
        </Link>
      </div>
    </>
  )
}
