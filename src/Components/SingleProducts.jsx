import axios from "axios";
import { useState } from "react";
import { useLocation} from "react-router-dom";
import Navbar from "./Navbar";

const SingleProduct = () => {

   
        let [phone , setPhone] = useState("")
        let [loading, setLoading] = useState("")
        let [success, setsuccess] = useState("")
        let [error, setError] = useState("")

        const {product} =useLocation().state || {}

        const img_url = "http://Lido.pythonanywhere.com/static/images/"
        const submitForm= async (e) => {
            e.preventDefault()
            setError("")
            setsuccess("")
            setLoading("Please wait as we process payment ...")
            try {
                const data = new FormData ()
                data.append("phone", phone)
                data.append("amount", product.product_cost)

                const response = await axios.post("https://Lido.pythonanywhere.com/api/mpesa_payment" , data)
                setLoading("")
                setsuccess(response.data.message)
                
            } catch (error) {
                setLoading("")
                setError(error.message)
                
            }
        }
        
    
    return ( 
        <div>

            <div className="row justify-content-center " >
            
            <Navbar/>
                
                    <div className="col-md-3 card shadow" >
                        <img src={img_url + product.product_photo} alt="" />
                    </div>

                    <div className="col-md-3 card shadow">
                        <h2>{product.product_name}</h2>
                        
                        
                        <h3 className="text-warning">{product.product_cost}</h3>
                        <p className="text-muted">{product.product_desc}</p>
                        <b className="text-warning">{loading}</b>
                        <b className="text-danger">{error}</b>
                        <b className="text-success">{success}</b>

                        <form onSubmit={submitForm}>
                            <input type="number" readOnly value={product.product_cost}  className="form-control"  required/> <br />
                            <input type="tel"  placeholder="Enter Mpesa No 2547xxxxxxxx" className="form-control" onChange={(e) => setPhone(e.target.value)}/> <br />

                            <button className="btn btn-primary">Pay Now</button>
                        </form>
                            
                    </div>

                

                
            </div>
        </div>
     );
}
 
export default SingleProduct;