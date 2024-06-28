import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for resetting the password, typically an API call
        // Assuming the API call is successful:
        setMessage('An email has been sent to your registered email address with instructions to reset your password.');
    };

    return (
        <div className="container">
            <Link to="/stressmap" className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="header">
                <div className="text">Reset Password</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                {message && (
                    <div className="message">
                        {message}
                    </div>
                )}
                <div className="submit-container">
                    <button type="submit" className="btn btn-primary submit">Reset Password</button>
                </div>
            </form>
            <style>
                {`
                    .container {
                        max-width: 400px;
                        margin: auto;
                        padding: 20px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        background-color: #fff;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                        margin-top: 50px;
                    }

                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .text {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .underline {
                        width: 50px;
                        height: 3px;
                        background-color: #007bff;
                        margin: 0 auto;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    .inputs {
                        margin-bottom: 20px;
                    }

                    .input {
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                    }

                    .input input {
                        width: calc(100% - 30px);
                        padding: 10px;
                        border: none;
                        border-bottom: 2px solid #007bff;
                        outline: none;
                        font-size: 16px;
                        color: #333333;
                        background-color: transparent;
                        transition: border-bottom-color 0.3s ease; 
                    }

                    .message {
                        text-align: center;
                        margin-bottom: 20px;
                        color: #007bff;
                    }

                    .submit-container {
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
};

export default ResetPassword;
