import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [user, setUser] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState({
        usernameError: "",
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    });

    const handleValidation = (ev) => {
        const { name, value } = ev.target;

        if (name === "username") {
            setUser({ ...user, username: value });
            setError({
                ...error,
                usernameError: value.length === 0 ? "Username is required" : "",
            });
        } else if (name === "name") {
            setUser({ ...user, name: value });
            setError({
                ...error,
                nameError: value.length === 0 ? "Name is required" : "",
            });
        } else if (name === "email") {
            setUser({ ...user, email: value });
            setError({
                ...error,
                emailError:
                    value.length === 0
                        ? "Email is required"
                        : !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
                        ? "Invalid email address"
                        : "",
            });
        } else if (name === "password") {
            setUser({ ...user, password: value });
            setError({
                ...error,
                passwordError:
                    value.length === 0
                        ? "Password is required"
                        : value.length < 8
                        ? "Password must be at least 8 characters"
                        : !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value)
                        ? "Password must contain at least one uppercase letter, one digit, and one special character"
                        : "",
            });
        } else if (name === "confirmPassword") {
            setUser({ ...user, confirmPassword: value });
            setError({
                ...error,
                confirmPasswordError:
                    value !== user.password ? "Passwords do not match" : "",
            });
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (
            !error.usernameError &&
            !error.nameError &&
            !error.emailError &&
            !error.passwordError &&
            !error.confirmPasswordError
        ) {
            console.log(user);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="username"
                        value={user.username}
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{error.usernameError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        value={user.name}
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{error.nameError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={user.email}
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{error.emailError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={user.password}
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{error.passwordError}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={user.confirmPassword}
                        name="confirmPassword"
                        className="form-control"
                        id="confirmPassword"
                        onChange={handleValidation}
                    />
                    <p className="text-danger">{error.confirmPasswordError}</p>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Login;
