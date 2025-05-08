import { useState } from "react";
import  Navbar  from "./Navbar";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError("Please fill out all fields.");
            return;
        }

        setLoading("Sending your message...");
        setError("");
        setSuccess("");

        try {
            // You can replace this with actual API to send the message
            // Example: Sending message to an API endpoint
            // const response = await axios.post('/api/contact', { name, email, message });

            // Simulate successful form submission
            setTimeout(() => {
                setLoading("");
                setSuccess("Thank you for reaching out! We'll get back to you soon.");
                setName("");
                setEmail("");
                setMessage("");
            }, 1000);
        } catch (err) {
            setLoading("");
            setError("Something went wrong. Please try again later.");
        }
    };
    

    return (
        <div className="container ">
            <Navbar/>
            <h2 className="text-center text-info">Contact Us</h2>
            <div className="text-center text-info">
                <p>We'd love to hear from you! Please fill out the form below.</p>
            </div>

            <div className="row justify-content-center ">
                <div className="col-md-6">
                    {/* Contact Form inside a Bootstrap Card with Shadow */}
                    <div className="card shadow-lg p-4"id="bel">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your Message</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Write your message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>

                            {loading && <div className="text-warning">{loading}</div>}
                            {error && <div className="text-danger">{error}</div>}
                            {success && <div className="text-success">{success}</div>}

                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-info rounded-pill">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <h5>Or reach us via:</h5>
                <p>
                    <strong>Email:</strong> www.smartphones.com <br />
                    <strong>Phone:</strong> +254707137381 <br />
                    <strong>Address:</strong> Westlands, Nairobi City, Kenya <span role="img" aria-label="kenya-flag">🇰🇪</span>
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
