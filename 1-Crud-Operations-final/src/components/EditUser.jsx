import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";

const EditUser = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/userReg/" + id)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [id]);

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnUpdate = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/userReg/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("User Details Updated Successfully!");
            setTimeout(() => navigate('/'), 4000);
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border border-5 border-dark shadow bg-white px-5 pt-3 pb-5 rounded-3">
                <h1 className="d-flex justify-content-center">Edit User Details</h1>
                <form onSubmit={handleOnUpdate}>
                    <div className="mb-2">
                        <label htmlFor="username" className="text-dark fw-bold">Name</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control border border-2 border-dark rounded-2"
                            placeholder="Enter your name"
                            value={data.username || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-dark fw-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control border border-2 border-dark rounded-2"
                            placeholder="Enter your email"
                            value={data.email || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="text-dark fw-bold">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control border border-2 border-dark rounded-2"
                            placeholder="Enter your password"
                            value={data.password || ""}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                    <Link to="/" className="btn btn-dark m-3">Go Back</Link>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Zoom}
                />
            </div>
        </div>
    );
};

export default EditUser;
