import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient w-100 border border-5 border-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold border border-2 border-dark rounded-2 px-3 bg-primary" to="/">Crud App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><button className="btn btn-warning fw-bold">View 🧑🏻</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create"><button className="btn btn-warning fw-bold">Add 🧑🏻</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
