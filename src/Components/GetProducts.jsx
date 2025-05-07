import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { FaHeart } from "react-icons/fa";
import { Spinner } from 'react-bootstrap'; 

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); // Tracks the current page
    const [hasMore, setHasMore] = useState(true); // Determines if there are more products to load

    const img_url = "https://Lido.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    // Function to get products with pagination support
    const getProducts = async (pageNumber) => {
        setLoading(true); // Show loading spinner
        setError("");

        try {
            const response = await axios.get(`https://Lido.pythonanywhere.com/api/getproducts?page=${pageNumber}`);
            const newProducts = response.data;
            if (newProducts.length > 0) {
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
                setFilteredProducts((prevProducts) => [...prevProducts, ...newProducts]);
            } else {
                setHasMore(false); // No more products to load
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false); // Hide the spinner when done
        }
    };

    // Handle search functionality
    const handleSearch = (value) => {
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        getProducts(page);
    }, [page]);

    return (
        <div className="container-fluid">
            {/* Loading Spinner */}
            {loading && (
                <div className="text-center mt-5">
                    <Spinner animation="border" variant="primary" />
                    <p>Loading products...</p>
                </div>
            )}

            {/* Error Message */}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            {/* Navbar */}
            <Navbar />

            {/* Carousel */}
            <Carousel />

            {/* Search Input */}
            <div className="row justify-content-center m-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control shadow-sm"
                        placeholder="Search for a product by name"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Products list */}
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-md-3 mb-4" id="bel" key={product.product_id}>
                        <div className="card shadow-lg rounded">
                            <img
                                src={img_url + product.product_photo}
                                className="product_img card-img-top rounded-top"
                                alt={product.product_name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center text-dark">{product.product_name}</h5>
                                <p className="text-primary">{product.product_desc.slice(0, 70)}...</p>
                                <b className="text-info d-block mb-2">{product.product_cost} Ksh</b>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button
                                        className="btn btn-outline-info w-80 h-80 rounded-pill"
                                        onClick={() => navigate("/singleproduct", { state: { product } })}
                                    >
                                        View Product
                                        <FaHeart className="ml-2" style={{ color: "red", fontSize: "1.2em" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && !loading && (
                <div className="col-12 text-center mt-4">
                    <button
                        className="btn btn-info rounded-pill shadow-sm py-2 px-4"
                        onClick={() => setPage(page + 1)}
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default GetProducts;
