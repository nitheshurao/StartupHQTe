import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; //to use parameeter 
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../redux/actions/ProductAction";
import Comments from "./Comments";
import './PageDetails.css'

const PageDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { title, body, id, _id } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    return (
        <div className="pages">
            <div>



                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (

                    <div class="max-w-md mx-auto bg-indigo-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-9">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                                <p>{id}</p>
                            </div>
                            <div class="p-1">

                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">   {title}</div>

                                <p class="mt-10 p-10 text-gray-500">{body}</p>
                            </div>
                        </div>
                    </div>

                )}
            </div>

            <div>
                <h1> Comments</h1>
                <Comments postid={id} />
            </div>

        </div>
    );
};

export default PageDetails;