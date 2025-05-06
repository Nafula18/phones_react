import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const Navigate = useNavigate();

    const handlelogout = () => {
        localStorage.clear();
        Navigate("/signin");
    }
    return ( 
        <div className="container-fluid">
        <section class="row">
            <div class="col-md-12">
                <div class="navbar navbar-expand-md navbar-dark bg-info ms-auto">
                    <Link to="Home" className="navbar-brand">Smartphone Collection</Link>
                    <button class="navbar-toggler" data-bs-target="#nafula" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="nafula">
                        
                         <div class="navbar-nav ">
                            <Link to="/addProducts" class="nav-link">Add products</Link>
                            <Link to="/" class="nav-link">Home</Link>

                            <Link to="SignIn" class="nav-link"> Sign in</Link>
                            <Link to="Signup" class="nav-link">Sign up</Link>
                         </div>
                         <div class="">
                           {user && (
                            <div className="navbar-nav ms-auto">
                                <b className="text-success nav-link">Hello {user.username}</b>
                                <button className="nav-link" onClick={handlelogout}>Logout</button>

                            </div>
                           )}

                           {!user && (
                            <div className="navbar-nav ms-auto">
                                <Link to="/signin" class="nav-link">Login</Link>
                                <Link to="/signup" class="nav-link">Register</Link>
                            </div>
                           )}

                         </div>

                    </div>
                    
                </div>
            </div>
         </section>
        </div>
     );
}
 
export default Navbar;