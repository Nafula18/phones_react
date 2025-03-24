import { Link } from "react-router-dom";
const footer = () => {
    return (  
        <div className="container-fluid">



    <div className="col-md-4">
        <h4 class="text-center text-warning">Contact Us</h4>
        <form >
            <input type="email" placeholder= "Enter your email" class="form-control"/><br/>

            <textarea name="" id="" className="form-control" placeholder="Leave a comment" rows="7"></textarea>

        </form>
        </div>

    <div class="col-md-4">
        <h4 className="text-center text-warning">Stay connected</h4>
        <br/>
        <Link to="https://facebook.com"> 
            <img src="images/download.png" width="50px" alt=""/>
        
        </Link> 
        <Link to="https://instagram.com" >
            <img src="images/download (12).jpeg" width="50px" alt=""/>
        
        </Link> 

        <Link to="https://twitter.com">
        
            <img src="images/download (1).png" width="50px" alt=""/>
        
        </Link> 

        <Link to="https://whatsapp.com" >
            <img src="images/download (13).jpeg" width="50px" alt=""/>
        
        </Link> 

        
    </div>


 

  <footer class="text-white bg-dark text-center p-2">
    <h5 style="background-color: deeppink; font-weight: 300;">Developed by L.Nafula &copy;2025.All rights reserved</h5>
  </footer>
  </div>

        
    );
}
 
export default footer;

    