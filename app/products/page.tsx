"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface singleProduct {

    category: string,

    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string
}
const products = () => {
    const [data, setData] = useState<singleProduct[]>([]);
    const [Laoding, setLaoding] = useState(true);
    const router = useRouter();


    let productData = async () => {
        try {
            const response = await axios.get<singleProduct[]>("https://fakestoreapi.com/products");
            console.log(response.data);
            setData(response.data)
        } finally {
            setLaoding(false)
        }
    }


    useEffect(() => {
        productData();
    }, [])

    const handel_click = (id: number) => {

        router.push(`/products/${id}`)
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-20">
                All <span className="text-yellow-500">Products</span>
            </h1>

            {/* <hr className="w-350 bg-black"/> */}

            {Laoding ? (
                <h1 className="text-3xl font-bold mb-5 text-blue-600 text-center p-10">Load<span className="text-yellow-500">ing...</span></h1>
            ) : (
                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {data.map((product, i) => (
                        <li
                            key={product.id}
                            onClick={() => handel_click(product.id)}
                            className="cursor-pointer flex flex-col items-center bg-white p-5 rounded-lg"
                        >
                            <img
                                className="w-[150px] h-[150px] object-contain mb-4"
                                src={product.image}
                                alt={product.title}
                            />

                            <h3 className="max-w-lg line-clamp-1 text-lg font-semibold text-center mb-2 text-black">
                                <span className="text-blue-500">
                                    {product.title.slice(0, Math.floor(product.title.length / 2))}
                                </span>
                                <span className="text-yellow-500">
                                    {product.title.slice(Math.floor(product.title.length / 2))}
                                </span>
                            </h3>


                            <p className="text-gray-700 font-medium mb-2">${product.price}</p>

                            <p className="text-yellow-500 font-bold">
                                {product.rating.rate} ({product.rating.count})
                            </p>
                        </li>
                    ))}
                </ol>
            )}
        </div>

    )
}

export default products