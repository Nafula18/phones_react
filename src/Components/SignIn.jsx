import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa"; // Import the Sign-In Icon
import { BiShow, BiHide } from "react-icons/bi"; // Import Bootstrap Icons for Show/Hide password

const SignIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    let navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading("Please wait ...");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://Lido.pythonanywhere.com/api/signin", data);
            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            } else {
                setLoading("");
                setError(response.data.message);
            }
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
    };

    // Toggle the password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="">

            <div className="row justify-content-center mt-4">
                <div id="densel" className="col-md-6 card shadow p-4">
                    <div className="text-center mb-4">
                        <FaSignInAlt style={{ fontSize: "3rem", color: "#007bff" }} /> {/* Sign In Icon */}
                    </div>
                    <h2 className="text-center">Sign In</h2>
                    <b className="text-danger">{error}</b>
                    <b className="text-warning">{loading}</b>

                    <form onSubmit={submitForm}>
                        <input
                            type="text"
                            placeholder="Enter username"
                            required
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"} // Toggle input type based on the state
                                placeholder="Enter password"
                                required
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="input-group-text"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? (
                                    <BiHide style={{ fontSize: "1.5rem" }} />
                                ) : (
                                    <BiShow style={{ fontSize: "1.5rem" }} />
                                )}
                            </span>
                        </div>
                        <br />
                        <button className="btn btn-primary w-80 rounded-pill" type="submit">Sign In</button>
                    </form>
                    <p className="text-center">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
