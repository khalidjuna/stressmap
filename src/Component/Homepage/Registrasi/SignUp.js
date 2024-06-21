import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    return (
        <div className="container">
            <Link to="/" className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="input">
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="input">
                    <input type="text" className="form-control" placeholder="Position" />
                </div>
                <div className="input">
                    <input type="text" className="form-control" placeholder="Institution" />
                </div>
                <div className="input">
                    <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="input">
                    <input type="text" className="form-control" placeholder="Country" />
                </div>
                <div className="input">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container">
                <button className="btn btn-primary submit">Sign Up</button>
                <Link to="/login" className="btn btn-secondary submit gray">Login</Link>
            </div>
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

                    .submit-container {
                        display: flex;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    )
}

export default SignUp;
