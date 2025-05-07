import { Link, useNavigate } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa"; // Import Smartphone Icon

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/signin");
    }

    return (
        <div className="container-fluid p-0"> {/* Removing padding and margin */}
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                {/* Navbar brand with Smartphone Icon */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <FaMobileAlt
                        style={{
                            fontSize: "2rem",
                            
                            color: "#ff6f00",  // Vibrant color for the icon
                            transition: "color 0.3s ease", // Smooth transition effect
                        }}
                        className="icon-hover"
                    />
                    Smartphone Collection
                </Link>

                <button className="navbar-toggler" data-bs-target="#nafula" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="nafula">
                    <div className="navbar-nav">
                        <Link to="/addProducts" className="nav-link">Add products</Link>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/contactus" className="nav-link">Contact Us</Link> {/* Link to Contact Us */}
                        {!user && (
                            <>
                                <Link to="/signin" className="nav-link">Sign in</Link>
                                <Link to="/signup" className="nav-link">Sign up</Link>
                            </>
                        )}
                    </div>

                    <div className="navbar-nav ms-auto">
                        {user && (
                            <>
                                <b className="text-success nav-link">Hello, {user.username}</b>
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
