const Footer = () => {
    return ( 
        <div className= "">
            <section class="row text-white bg-info p-4">
                <div className="col-md-4">
                    <h4 class="text-center">About Us</h4>
                    <p>Our Phone is more than a device-it's our connection to the world , a tool that empowers us and keep us moving forward and a tool for learning,sharing and growing together</p>
                    <p>Our phones is more than technology-its how we stay connected</p>
                </div>

                <div className="col-md-4">
                    <h4 class = "text-center">Contact Us</h4>
                    <form action="">
                        <input 
                        type="email"
                        placeholder="Enter your Email"
                        class="form-control" />
                        <br/>

                        <textarea 
                        name="" 
                        id=""
                        class="form-control"
                        placeholder="Leave a Comment"
                        rows="7"
                        ></textarea>
              
                    </form>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Stay Connected</h4><br />
                    <a href="https://instagram.com">
                    <img src="Images/download (12).jpeg" alt="" width="60px" />
                    </a>
                

                    <a href="https://facebook.com">
                    <img src="Images/download.png" alt=""  width="60px"/>
                    </a>

                    <p class="text-dark">Our phones are revolutionized the way information and services are delivered quickly and efficient</p>

                </div>
            </section>
            <footer className="text-white  bg-info text-center p-2">
                <h4 >Smart.Fast.Always Connected</h4>
                <h5>Developed by Lydia.N.w & copy;2025. All rights reserved</h5>
            </footer>

            
        </div>
     );
}
 
export default Footer;