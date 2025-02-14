import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../header/PageHeader";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserCreate() {
    const [user, setUser] = useState({id: '',uid:'', name: '', address: '', phone: '', email: '', password: ''});
    const navigate = useNavigate();

    const txtBoxOnChange = event => {
        const updatableUser = { ...user };
        updatableUser[event.target.id] = event.target.value;
        setUser(updatableUser);
    };

    const createUser = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.post(`${baseUrl}/users`, { ...user });
            const createdUser = response.data.user;
            setUser(createdUser);
            alert(response.data.message);
            navigate('/users/list');
        } catch (error) {
            alert('Server Error');
        }
    };

    return (
        <>
            <PageHeader />            
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mt-4 text-primary fw-bold">
                <a href="/users/list" className="btn btn-outline-secondary me-3">⬅ Go Back</a> Add User
            </motion.h3>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container p-4 rounded shadow-lg bg-white border border-primary">
                <div className="form-group mb-3">
                    <label htmlFor="uid" className="form-label">Id:</label>
                    <motion.input 
                        type="text" 
                        className="form-control" 
                        id="uid" 
                        placeholder="Please enter UID"
                        value={user.uid} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <motion.input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Please enter user name"
                        value={user.name} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <motion.input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="Please enter address"
                        value={user.address} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <motion.input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        placeholder="Please enter phone number"
                        value={user.phone} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email ID:</label>
                    <motion.input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Please enter email ID"
                        value={user.email} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <motion.input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Please enter the Password"
                        value={user.password} 
                        onChange={txtBoxOnChange} 
                        whileFocus={{ scale: 1.05, borderColor: "#0d6efd" }}
                    />
                </div>
                <motion.button 
                    className="btn btn-primary w-100 mt-3"
                    whileHover={{ scale: 1.1, backgroundColor: "#0b5ed7" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={createUser}
                >
                    🚀 Create User
                </motion.button>
            </motion.div>
        </>
    );
}

export default UserCreate;