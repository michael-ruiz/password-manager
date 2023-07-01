import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getDatabase, ref, update } from "firebase/database";

export default function AddPassword() {
    const [newSite, setNewSite] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function add(newSite, newEmail, newPassword) {
        const db = getDatabase();
        const pref = ref(db, `Passwords/${newSite}`);
        update(pref, {'email' : newEmail, 'password' : newPassword});
    }
  return (
    <>
        <table>
            <tr>
                <th>Site</th>
                <th><input type="text" value={newSite} onChange={(e) => setNewSite(e.target.value)}/></th>
            </tr>
            <tr>
                <th>Email</th>
                <th><input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/></th>
            </tr>
            <tr>
                <th>Password</th>
                <th><input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/></th>
            </tr>
        </table>
        <div>
            <button onClick={() => add(newSite, newEmail, newPassword)}>Add</button>
        </div>
        <div>
            <Link to="/home">
                <button>Back</button>
            </Link>
        </div>
    </>
  )
}
