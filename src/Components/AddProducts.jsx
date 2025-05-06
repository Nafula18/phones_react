import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const AddProducts = () => {
    let [product_name, setProductName] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_photo,setproductPhoto] = useState("");

    const navigate = useNavigate()
    const user = localStorage.getItem("user")

    const checkUser = () => {
        if (!user) {
            localStorage.clear()
            return navigate("/signin");
        }
    };

    useEffect(() => checkUser(), [user]);
    let fileinputref = useRef(null)

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const submitForm = async(e) => {
        e.preventDefault()
        try {
            setError("")
            setSuccess("")
            setLoading("Please wait as we submit your data")

            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response = await axios.post("https://Lido.pythonanywhere.com/api/addproduct", data)
            setLoading("")
            setSuccess(response.data.success);
            setProductCost("");
            setProductDesc("");
            setProductName("");
            fileinputref.current.value = "";

        } catch (error) {
            setLoading('')
            setError(error.message)
            
        }

    }


    return ( 
        
        <div className="row justify-content-center mt-4">
            
            <Navbar/>

            <div className="col-md-6 card shadow p-4">
                
              <h2>Add Products</h2>  
              <b className="text-warning">{loading}</b>
              <b className="text-danger">{error}</b>
              <b className="text-success">{success}</b>
              <form onSubmit={submitForm}>
                <input 
                type="text"
                
                placeholder="Enter Product Name" 
                required
                className="form-control"
                onChange={(e) => setProductName (e.target.value)}
                value={product_name}
                />
                <br />

                <textarea 
                name="" 
                id=""
                className="form-control" 
                placeholder="Product Description"
                required 
                onChange={(e)=> setProductDesc(e.target.value)}
                value={product_desc}
                ></textarea>
                
                <br />  



                <input
                type="number"
                placeholder="Enter Product Cost"
                required className="form-control" 
                onChange={(e) => setProductCost(e.target.value)} 
                value={product_cost}
                /> 
                  
                <br /> 
                
                <label
                htmlFor="" 
                className="form-label">Product Photo</label>
                <br />
                <input 
                type="file"
                ref={fileinputref}
                required className="form-control"
                onChange={(e) => setproductPhoto(e.target.files[0])} 
                />
                <br />

                <button className="btn btn-primary">Add Product</button>
                </form>

            </div>

            <Footer/>
        </div>
     );
}
 
export default AddProducts;