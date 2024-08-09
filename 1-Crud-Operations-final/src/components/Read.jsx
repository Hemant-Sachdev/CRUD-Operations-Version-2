import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/userReg/" + id)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border border-5 border-dark shadow bg-white px-5 pt-3 pb-5 rounded-3">
                <h3>User Details</h3>
                <div className="mb-2"><strong>Name: {data.username}</strong></div>
                <div className="mb-2"><strong>Email: {data.email}</strong></div>
                <div className="mb-2"><strong>Password: {data.password}</strong></div>
                <Link to={`/edit/${id}`} className="btn btn-info">Edit User</Link>
                <Link to="/" className="btn btn-dark mx-3">Back</Link>
            </div>
        </div>
    );
};

export default Read;
