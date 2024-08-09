import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/userReg")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    const handleOnDelete = (id) => {
        fetch(`http://localhost:5000/userReg/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                setData(data.filter(user => user.id !== id));
                toast.success("User deleted successfully!");
            } else {
                toast.error("Failed to delete the user.");
            }
        })
        .catch(err => {
            toast.error("An error occurred while deleting the user.");
            console.log(err);
        });
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light">
            <h1>Users List🧑🏻‍💻</h1>
            <div className="w-75 rounded-4 bg-white border border-5 border-dark shadow p-4">
                <div className="d-flex justify-content-end"><Link to="/create" className="btn btn-success">Add New User</Link></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className="btn btn-warning me-2">Read</Link>
                                    <Link to={`/edit/${d.id}`} className="btn btn-primary me-2">Edit</Link>
                                    <button className="btn btn-danger me-2" onClick={() => handleOnDelete(d.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer 
                position="top-center" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover 
                theme="dark" 
            />
        </div>
    );
};

export default View;
