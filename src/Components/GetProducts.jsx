import axios from "axios";

import {useEffect, useState } from "react";
import { useNavigate , Link} from "react-router-dom";

const GetProducts = () => {

    let [Products,setProducts]= useState([])
    let [error, setError] = useState("")
    let [loading , setLoading] = useState("")
    let [filteredProducts, setFilteredProducts] = useState([])

    const img_url = "https://Lido.pythonanywhere.com/static/images/"
    const navigate = useNavigate();
    

    const getProducts = async() => {
        setError("")
        setLoading("Please wait ... receiving products...");
        try {
            const response = await axios.get("https://Lido.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading("");
            
        } catch (error) {
            setLoading("");
            setError(error.message);
            
        }

    }

    const handleSearch = (value) => {
        const filtered = Products &&  Products.filter((product) => 
            product.product_name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredProducts(filtered);
    }

    // useEffect(function,dependancy)
    useEffect(() =>{
        getProducts();
    }, [])
    
    return (
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            {/* navbar */}
            
            <nav className="m-4">
                
                <Link className="btn btn-dark mx-2" to = "/signin">sign in</Link>
                <Link className="btn btn-dark mx-2" to = "/signup">signup</Link>
                <Link className="btn btn-dark mx-2" to = "/addproducts">Add Products</Link>
                <Link className="btn btn-dark mx-2" to = "/">Home</Link>

                


            </nav>
            {/* carousel */}
            
            {/* content */}
            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Search for a product by name" onChange={(e) =>handleSearch(e.target.value)}/>
                </div>
            </div>

            {filteredProducts.map((product) => (
                 <div className="col-md-3 justify-content-center-mb-4">
                    
                 <div className="card shadow">
                     <img src={img_url + product.product_photo} className="product_img" alt="" />
                     <div className="card-body">
                         <h5 className="mt-2">{product.product_name}</h5>
                         <p className="text-primary">{product.product_desc.slice(0, 70)}</p>
                         <b className="text-info">{product.product_cost} Ksh</b><br />
                         
                         <button className="btn btn-outline-dark w-40" onClick={() => navigate("/singleproduct" , {state : {product}})}>View Product</button>
                     </div>
                 </div>
             </div>

            ))}
           
            {/* footer */}
            
        </div>
     );
}
 
export default GetProducts;