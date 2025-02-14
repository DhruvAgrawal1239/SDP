import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import axios from 'axios';

function UserEdit() {
    const [user, setUser] = useState({id: '',uid:'', name: '', address: '', phone: '', email: '', password: ''});
    const params = useParams();
    const navigate = useNavigate();

    const txtBoxOnChange = event => {
        const updatableUser = { ...user };
        updatableUser[event.target.id] = event.target.value;
        setUser(updatableUser);
    };

    const readById = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.get(`${baseUrl}/users/${params.id}`);
            const queriedUser = response.data;
            setUser(queriedUser);
        } catch (error) {
            alert('Server Error');
        }
    };

    const updateUser = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.put(`${baseUrl}/users/${params.id}`, { ...user });
            const updatedUser = response.data.user;
            setUser(updatedUser);
            alert(response.data.message);
            navigate('/users/list');
        } catch (error) {
            alert('Server Error');
        }
    };

    useEffect(() => {
        readById();
    }, []);

    return (
        <>
            <PageHeader />
            <h3><a href="/users/list" className="btn btn-light">Go Back</a> Edit User</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="uid" className="form-label">UserID:</label>
                    <input type="text" className="form-control" id="name" disabled
                        placeholder="Please enter User Id"
                        value={user.uid} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" disabled
                        placeholder="Please enter user name"
                        value={user.name} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" disabled
                        placeholder="Please enter address"
                        value={user.address} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input type="text" className="form-control" id="phone" 
                        placeholder="Please enter phone number"
                        value={user.phone} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email ID:</label>
                    <input type="email" className="form-control" id="email" 
                        placeholder="Please enter email ID"
                        value={user.email} 
                        onChange={txtBoxOnChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" disabled
                        placeholder="Please enter the password"
                        value={user.password} 
                        onChange={txtBoxOnChange} />
                </div>
                <button className="btn btn-warning" onClick={updateUser}>Update User</button>
            </div>
        </>
    );
}

export default UserEdit;