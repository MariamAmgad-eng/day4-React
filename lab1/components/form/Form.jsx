import React, { useState } from 'react'
import styles from './Form.module.css'

function Form() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
    });
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        usernameError: "",
        passwordError: "",
        passwordConfirmationError: "",
    });

    const handleValidation = (ev) => {
        const { name, value } = ev.target;

        switch (name) {
            case "name":
                setUser({ ...user, name: value });
                setError({
                    ...error,
                    nameError: value.length === 0 ? "Name is required" : "",
                });
                break;
            case "email":
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
                break;
            case "username":
                setUser({ ...user, username: value });
                setError({
                    ...error,
                    usernameError:
                        value.length === 0
                            ? "Username is required"
                            : /\s/.test(value)
                            ? "Username should not contain spaces"
                            : "",
                });
                break;
            case "password":
                setUser({ ...user, password: value });
                setError({
                    ...error,
                    passwordError:
                        value.length === 0
                            ? "Password is required"
                            : value.length < 8
                            ? "Password must be at least 8 characters"
                            : !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
                            ? "Password must contain at least one uppercase letter, one digit, and one special character"
                            : "",
                });
                break;
            case "passwordConfirmation":
                setUser({ ...user, passwordConfirmation: value });
                setError({
                    ...error,
                    passwordConfirmationError:
                        value.length === 0
                            ? "Password confirmation is required"
                            : value !== user.password
                            ? "Passwords do not match"
                            : "",
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(user);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input
                    className={styles.input}
                    name="name"
                    value={user.name}
                    onChange={handleValidation}
                />
                {error.nameError && <p className={styles.error}>{error.nameError}</p>}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                    className={styles.input}
                    name="email"
                    value={user.email}
                    onChange={handleValidation}
                />
                {error.emailError && <p className={styles.error}>{error.emailError}</p>}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Username</label>
                <input
                    className={styles.input}
                    name="username"
                    value={user.username}
                    onChange={handleValidation}
                />
                {error.usernameError && <p className={styles.error}>{error.usernameError}</p>}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <input
                    type="password"
                    className={styles.input}
                    name="password"
                    value={user.password}
                    onChange={handleValidation}
                />
                {error.passwordError && <p className={styles.error}>{error.passwordError}</p>}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Confirm Password</label>
                <input
                    type="password"
                    className={styles.input}
                    name="passwordConfirmation"
                    value={user.passwordConfirmation}
                    onChange={handleValidation}
                />
                {error.passwordConfirmationError && <p className={styles.error}>{error.passwordConfirmationError}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;