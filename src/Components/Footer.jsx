import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = () => {
    return ( 
        <div className="">
            <section className="row text-white bg-info p-4">
                <div className="col-md-4">
                    <h4 className="text-center">About Us</h4>
                    <p>Our phone is more than a device—it's our connection to the world, a tool that empowers us, keeps us moving forward, and a tool for learning, sharing, and growing together.</p>
                    <p>Our phone is more than technology—it's how we stay connected.</p>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Links</h4>
                    {/* Replace the form with a Link to the Contact Us page */}
                    <Link to="/contactus" className="btn btn-info text-white">
                        Contact Us 
                    </Link>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Stay Connected</h4><br />
                    <a href="https://instagram.com">
                        <img src="Images/download (12).jpeg" alt="Instagram" width="60px" />
                    </a>
                    <a href="https://facebook.com">
                        <img src="Images/download.png" alt="Facebook" width="60px"/>
                    </a>
                    <p className="text-dark">Our phones have revolutionized the way information and services are delivered quickly and efficiently.</p>
                </div>
            </section>

            <footer className="text-white bg-info text-center p-2">
                <h4>Smart. Fast. Always Connected.</h4>
                <h5>Developed by Lydia.N.w &copy;2025. All rights reserved</h5>
            </footer>
        </div>
    );
};

export default Footer;
