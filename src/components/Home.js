import React from 'react'
import auth from '../firebase';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export default function Home() {
  return (
    <>
      <Link to="/view">
        <button>View All</button>
      </Link>
      <Link to="/add">
        <button>Add Password</button>
      </Link>
      <div>
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </>
  )
}
