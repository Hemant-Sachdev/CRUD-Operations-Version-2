import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const notify = () => toast.success("New User Added Successfully!");

    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:5000/userReg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            notify();
            setTimeout(() => navigate('/'), 4000);
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border border-5 border-dark shadow bg-white px-5 pt-3 pb-5 rounded-3">
                <h1 className="d-flex justify-content-center">Add New User</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-2">
                        <label htmlFor="username" className="text-dark fw-bold">Name</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-control border border-2 border-dark rounded-2" 
                            placeholder="Enter your name" 
                            onChange={e => setValues({...values, username: e.target.value})} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-dark fw-bold">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control border border-2 border-dark rounded-2" 
                            placeholder="Enter your email" 
                            onChange={e => setValues({...values, email: e.target.value})} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="text-dark fw-bold">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control border border-2 border-dark rounded-2" 
                            placeholder="Enter your password" 
                            onChange={e => setValues({...values, password: e.target.value})} 
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-dark m-3">Go Back</Link>
                </form>
                <ToastContainer position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition: Zoom />
            </div>
        </div>
    );
};

export default CreateUser;
