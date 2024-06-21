import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [institution, setInstitution] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleAddUser = () => {
        const userData = {
            fullName,
            email,
            position,
            institution,
            city,
            country,
            password
        };
        
        navigate("/success");
    };

    const styles = {
        container: {
            maxWidth: "100%", 
            margin: "auto",
            padding: "20px",
            borderRadius: "5px",
        },
        text: {
            fontSize: "24px",
            fontWeight: "bold",
        },
        underline: {
            width: "50px",
            height: "3px",
            backgroundColor: "#007bff",
            margin: "0 auto",
        },
        inputs: {
            marginBottom: "20px",
        },
        input: {
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
        },
        inputField: {
            width: "calc(100% - 30px)",
            padding: "10px",
            border: "none",
            borderBottom: "2px solid #007bff",
            outline: "none",
            fontSize: "16px",
            color: "#333333",
            backgroundColor: "transparent",
            transition: "border-bottom-color 0.3s ease",
        },
        submitContainer: {
            display: "flex",
            justifyContent: "center",
        },
    };

    return (
        <div style={styles.container}>
            <div className="inputs" style={styles.inputs}>
                <div className="input" style={styles.input}>
                    <input type="text" className="form-control" style={styles.inputField} placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="email" className="form-control" style={styles.inputField} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="text" className="form-control" style={styles.inputField} placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="text" className="form-control" style={styles.inputField} placeholder="Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="text" className="form-control" style={styles.inputField} placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="text" className="form-control" style={styles.inputField} placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="input" style={styles.input}>
                    <input type="password" className="form-control" style={styles.inputField} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-container" style={styles.submitContainer}>
                <button className="btn btn-primary submit" onClick={handleAddUser}>Add User</button>
            </div>
        </div>
    )
}

export default AddUser;
