import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([{id: '', uid: '', name: '', address: '', phone: '', email: '', password: ''}]);

    const readAllUsers = async () => {
        try {
            const baseUrl = 'http://localhost:8080';
            const response = await axios.get(`${baseUrl}/users`);
            const queriedUsers = response.data;
            setUsers(queriedUsers);
        } catch (error) {
            alert('Server Error');
        }
    };

    const deleteUser = async (id) => {
        if (!confirm("Are you sure to delete?")) {
            return;
        }
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.delete(`${baseUrl}/users/${id}`);
            alert(response.data.message);
            await readAllUsers();
        } catch (error) {
            alert('Server Error');
        }
    };

    useEffect(() => {
        readAllUsers();
    }, []);

    return (
        <>
            <PageHeader />
            <h3>List of Users</h3>
            <div className="container">
                <table className="table table-success table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(users && users.length > 0) ? users.map(
                            (user) => {
                                return (
                                    <tr key={user.id}>
                                        
                                        <td>{user.uid}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <a href={`/users/view/${user.id}`} className="btn btn-success">View</a>
                                            &nbsp;
                                            <a href={`/users/edit/${user.id}`} className="btn btn-warning">Edit</a>
                                            &nbsp;
                                            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            }
                        ) : <tr><td colSpan="6">No Data Found</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserList;
