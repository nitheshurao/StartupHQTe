import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/ProductAction";
import PageC from "./PageC";



const PageL = () => {
    // const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            // https://reqres.in/api/users?page=2  
            // https://fakestoreapi.com/products
            .get("https://jsonplaceholder.typicode.com/posts/ ")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
        console.log(response.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // console.log("Products :", products);
    return (
        <div className="grid grid-cols-3 pag-3 gap-3">

            <PageC />
        </div>
    );
};

export default PageL;
