"use client"

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SingleProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating?: {
        rate: number;
        count: number;
    };
    title: string;
}


const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState<SingleProduct | null>(null)
    const productId = params.productId;
    const [loading, setLaoding] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<SingleProduct>(
                    `https://fakestoreapi.com/products/${productId}`
                );
                setProduct(response.data)

            } catch (error) {
                console.error(error);

            } finally {
                setLaoding(false)
            }
        }
        fetchData();

    }, [productId]);

    if (loading) {
        return <h1 className="text-3xl font-bold mb-5 text-blue-600 text-center p-10 ">Load<span className="text-yellow-500">ing...</span></h1>
    }
    if (!product) {
        return <h1 className="text-3xl font-bold mb-5 text-blue-600 text-center p-10">Product N<span className="text-yellow-500">ot Found...</span></h1>
    }


    return (
        <>
            {loading ? (<h1 className="text-3xl font-bold mb-5 text-blue-600 text-center p-10 mt-10">Load<span className="text-yellow-500">ing...</span></h1>) : <div className="p-10 text-center flex justify-center items-center flex-col w-full">
                <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-5">
                    Single <span className="text-yellow-500">Product</span>
                </h1>
                <hr className="w-300 bg-black" />

                {/* <h1 className="text-3xl font-bold mb-5 text-black">{product.title}</h1> */}
                <h3 className=" text-3xl font-bold text-center mb-5 mt-15 text-black">
                    <span className="text-blue-600">
                        {product.title.slice(0, Math.floor(product.title.length / 2))}
                    </span>
                    <span className="text-yellow-500">
                        {product.title.slice(Math.floor(product.title.length / 2))}
                    </span>
                </h3>

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-[200px] h-[200px] object-contain mb-5 mx-auto"
                />
                <p className="text-xl font-semibold mb-2">${product.price}</p>

                {product.rating ? (
                    <p className="text-yellow-500 font-bold mb-2">
                        ⭐ {product.rating?.rate} ({product.rating?.count})
                    </p>
                ) : (
                    <p className="text-gray-500 mb-2">No rating available</p>
                )}

                <p className="text-gray-700 max-w-lg line-clamp-3 text-ellipsis overflow-hidden">{product.description}</p>
            </div>}
        </>
    );
};

export default ProductDetails;
