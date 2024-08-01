import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setUserRole }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleForgotPasswordClick = () => {
        setForgotPasswordClicked(true);
        navigate("/stressmap/reset-password");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        // Example:
        if (email === 'admin@example.com' && password === 'admin') {
            setUserRole('admin');
            navigate('/stressmap/adminmap');
        } else {
            setUserRole('user');
            navigate('/stressmap/map');
        }
        setIsLoggedIn(true);
    };

    return (
        <div className="container">
            {isLoggedIn && (
                <button className="btn btn-danger logout-button" onClick={handleLogout}>
                    Logout
                </button>
            )}
            <Link to="/stressmap" className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleLogin}>
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
                    <div className="input">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="forgot-password" onClick={handleForgotPasswordClick}>
                    Forgot Password? <span>Click Here!</span>
                </div>
                {forgotPasswordClicked && (
                    <div className="forgot-password-message">
                        An email has been sent to your registered email address with instructions to reset your password.
                    </div>
                )}
                <div className="submit-container">
                    <button type="submit" className="btn btn-primary submit">Login</button>
                    <Link to="/stressmap/sign-up" className="btn btn-secondary submit gray">Sign Up</Link>
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

                    .forgot-password {
                        text-align: center;
                        margin-bottom: 20px;
                        cursor: pointer;
                    }

                    .forgot-password span {
                        color: #007bff;
                        cursor: pointer;
                    }

                    .forgot-password-message {
                        text-align: center;
                        margin-bottom: 20px;
                        color: #007bff;
                    }

                    .submit-container {
                        display: flex;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    )
}

export default Login;
