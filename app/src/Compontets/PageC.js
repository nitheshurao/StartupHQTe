import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PageC = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const products = useSelector((state) => state);
    const renderList = products.map((product) => {
        const { id, title, body } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/posts/${id}`}>




                    <div className="container">

                        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 .  border-purple-200 hover:text-white hover:bg-purple-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">

                            <div class="md:flex-shrink-0">
                                <p>{id}</p>
                            </div>
                            {/* <div className="flex-shrink-0">
                                <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">

                            </div> */}

                            <div>

                                {/* <div className="text-xl font-medium text-black">{id}</div> */}
                                <div className="text-xl font-medium text-primary">{title}</div>
                                <p className="text-gray-500">{body}</p>


                            </div>
                            {/* </div> */}
                        </div>
                    </div >
                </Link >



                {/*  */}

            </div >
        );
    });
    return <>{renderList}</>;
};

export default PageC;