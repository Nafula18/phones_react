
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const SignUp = () => {
    //create variables
    let [username,setUsername] = useState ("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState ("");
    let [password,setPassword] =useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState ("");


    const togglepassword = ()=> {
        const pdinput = document.getElementById("password");
        let type = pdinput.getAttribute("type");

        if(type=="password") {
            type = "text";

        }else {
            type="password";
        }
        pdinput.setAttribute("type",type);
    };
    const submitForm = async(e)=> {
        e.preventDefault();
        try {
           setLoading("Please wait while we submit your data")
           const data =  new FormData ();
           data.append("username", username,)
           data.append("email", email)
           data.append("phone", phone)
           data.append("password", password)

           const response = await axios.post("https://Lido.pythonanywhere.com/api/signup", data);
           setLoading("")
           setSuccess(response.data.success)
           
         }catch (error) {
            setLoading("");
            setError ("something went wrong");

        }
    }
    return ( 
        <div className="row justify-content-center mt-4">
            
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <b className="text-danger">{error}</b>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <form onSubmit={submitForm}>

                <input type="text" className="form-control" placeholder="Enter Username" required onChange={(e)=> setUsername(e.target.value)}

                /><br />
                
                <input type="email" className="form-control" placeholder="Enter email" required onChange={(e)=> setEmail(e.target.value)}/><br />
                
                <input type="tel" className="form-control" placeholder="Enter phone" required onChange={(e)=> setPhone(e.target.value)}/><br />
                <div className="input-group">

                <input type="password"
                 className="form-control" 
                 placeholder="Enter password"
                 required 
                 onChange={(e)=> setPassword(e.target.value)}/>
                 <span className="input-group-text" onClick={togglepassword}>
                    <i className="bi bi-eye-slash"></i>
                 </span>

                
                 </div><br />
                <button className="btn btn-primary">Sign up</button>
                </form>
                <p>Already have an account?<Link to="/signin">Sign In</Link>
                </p>

            </div>
        </div>
     );
}
 
export default SignUp;