import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../header/PageHeader";
import axios from "axios";

function UserView() {
    const [user, setUser] = useState({ id: "", uid: "", name: "", address: "", phone: "", email: "" });
    const params = useParams();

    const readById = async () => {
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.get(`${baseUrl}/users/${params.id}`);
            const { password, ...userData } = response.data; // Remove password
            setUser(userData);
        } catch (error) {
            alert("Server Error");
        }
    };

    useEffect(() => {
        readById();
    }, []);

    return (
        <>
            <PageHeader />
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mt-4 text-primary fw-bold">
                <a href="/users/list" className="btn btn-outline-secondary me-3">⬅ Go Back</a> View User
            </motion.h3>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container p-4 rounded shadow-lg bg-white border border-primary">
                {Object.entries(user).map(([key, value]) => (
                    <motion.div key={key} className="form-group mb-3" whileHover={{ scale: 1.02 }}>
                        <label className="form-label text-capitalize fw-bold">{key}:</label>
                        <div className="form-control bg-light text-dark border border-primary">{value}</div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default UserView;