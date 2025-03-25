import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
const Footer = ()=>{
    return(
        <div id="footer">
            <div className="container-fluid">
                <div className="row p-4 Footer">
                    <div className="col-md-4 text-dark">
                        <h4>SmartPhone Collection</h4>
                        <p>Delivery is free</p>
                    </div>

                    <div className="col-md-4 text-dark">
                        <h4 className="text-center">Stay Connected</h4>
                        
                        <Link to="https://facebook.com">
                            <img src="images/download.png" width="50px" alt=""/>
                        </Link>
                        <Link to="https://instagram.com">
                            <img src="images/download (12).jpeg" width="50px" alt=""/>
                        </Link>
    
           
                        <Link to="https://whatsapp.com">
                            <img src="images/download (13).jpeg" width="50px" alt=""/>
                        </Link>
    
            <p class="text-dark"></p>
    
                        
                    
                    </div>

                    <div className="col-md-4">
                        <h2>Find Us at</h2>
                        <div><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Westlands,%20Nairobi+(The%20Spice%20Haven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">The Spice Haven</a></iframe></div>

                    </div>

                </div>
                <footer className="text-white bg-dark text-center p-2">
                    <h5  >Developed by L.Nafula &copy; 2025. All rights reserved. Terms and Conditions apply</h5>
                </footer>
            </div>
        </div>
        
    )
}
export default Footer;