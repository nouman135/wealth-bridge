import axios from "axios"
import { useEffect, useState } from "react";

export default function Clients() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:8000/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <div>
            <h1>List of Clients</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}