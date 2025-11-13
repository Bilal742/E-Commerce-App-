"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  const hamdle_click = () => {
    router.push("/products")
  }
  return (
    <div className='flex justify-center items-center flex-col h-100'>
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
        Welcome to <span className="text-yellow-500">ShopEase</span>
      </h1>
      <p className="text-gray-600 text-center text-lg mb-10">
        Discover the latest trends at unbeatable prices.
      </p>
      <button className='cursor-pointer text-white py-2 px-5 rounded bg-blue-600' onClick={hamdle_click}>All Products</button>
    </div>
  )
}

export default page