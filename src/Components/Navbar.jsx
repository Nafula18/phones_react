import { Link } from "react-router-dom";

const navbar = () => {
    return ( 
        <div className="container-fluid">
                <section class="row">
            <div class="col-md-12">
                <div class="navbar navbar-expand-md navbar-dark bg-danger">
                    <Link to="Home" className="navbar-brand">Smartphone Collection</Link>
                    <button class="navbar-toggler" data-bs-target="#navbarCollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        
                         <div class="navbar-nav">
                            <Link to="AddProducts" class="nav-link">Add products</Link>
                            <Link to="#" class="nav-link"></Link>

                            <Link to="SignIn" class="nav-link"> Sign in</Link>
                            <Link to="Signup" class="nav-link">Sign up</Link>
                         </div>
                    </div>
                    
                </div>
            </div>
         </section>
        </div>
     );
}
 
export default navbar;