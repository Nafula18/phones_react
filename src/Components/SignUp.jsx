import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  // State variables
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility function
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading("Please wait while we submit your data...");
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("password", password);

      const response = await axios.post(
        "https://Lido.pythonanywhere.com/api/signup",
        data
      );

      setLoading("");
      setSuccess(response.data.success);
      console.log(response);
    } catch (error) {
      setLoading("");
      setError("Something went wrong");
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4" id="densel">
        <div className="text-center mb-4">
          <FaUserPlus style={{ fontSize: "3rem", color: "#007bff" }} /> {/* Sign-up Icon */}
        </div>
        <h2 className="text-center">Sign Up</h2>
        <b className="text-danger">{error}</b>
        <b className="text-warning">{loading}</b>
        <b className="text-success">{success}</b>
        <form onSubmit={submitForm}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            required
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="tel"
            required
            placeholder="Enter Phone No"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"} // Toggle visibility based on state
              required
              id="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="input-group-text" onClick={togglePassword}>
              <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}></i> 
            </span>
          </div>
          <br />
          <button className="btn btn-primary w-80 rounded-pill">Sign Up</button>
        </form>
        <p className="text-center">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
