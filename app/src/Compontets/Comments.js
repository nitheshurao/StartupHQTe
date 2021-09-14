import React, { useEffect, useState } from 'react'

const Comments = ({ postid }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    console.log("pos" + postid)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments/")

            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (





            <ul>
                {items.filter(com => com.postId == postid).map(item => (
                    <li key={item.postId}>
                        {/*  */}
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-1">
                            <div class="md:flex">
                                <div class="md:flex-shrink-0">
                                    email: {item.email}
                                </div>
                                <div class="p-1">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">   Comments</div>

                                    <p class="mt-1 p-1 text-gray-500">{item.body}</p>
                                </div>
                            </div>
                        </div>




                        {/*  */}
                        {/* <div class="p-1 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-1 sm:py-20 px-11 mx-10 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:text-white hover:bg-purple-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2">

                            <div class="text-center space-y-9 sm:text-left">
                                <div class="space-y-0.5">
                                    <p class="text-lg text-black font-semibold">
                                        {item.email}
                                    </p>
                                    <p class="text-gray-500 font-medium">
                                        {item.name}
                                    </p>
                                    <p>{item.body}</p>
                                </div>
                                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"></button>
                            </div>
                        </div> */}


                    </li>




                ))}
            </ul>
        );
    }
}

export default Comments
