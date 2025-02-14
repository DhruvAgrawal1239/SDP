import { motion } from "framer-motion";

function PageHeader() {
    return (
        <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="navbar navbar-expand-lg bg-dark shadow-lg py-3 border-bottom border-secondary text-white"
        >
            <div className="container d-flex justify-content-between align-items-center">
                <a className="text-white h4 d-flex align-items-center gap-2" href="/">
                    <span role="img" aria-label="logo">🚀</span>
                    <span>User Management System</span>
                </a>
                <button className="navbar-toggler border-0 p-2 rounded bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-flex gap-3">
                        <li className="nav-item">
                            <a className="text-white d-flex align-items-center gap-2 px-4 py-2 rounded bg-primary text-decoration-none" href="/users/list">
                                📋 <span>Users</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <motion.a 
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white d-flex align-items-center gap-2 px-4 py-2 rounded bg-success text-decoration-none" 
                                href="/users/create"
                            >
                                ➕ <span>Add User</span>
                            </motion.a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

export default PageHeader;
