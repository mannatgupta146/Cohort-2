'use client'
import React, { useState, useEffect } from 'react'

const page = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        let fetchData = async() => {
            try {
                let res = await fetch("https://fakestoreapi.com/products")
                let data = await res.json()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchData()
    }, [])

  return (
    <div className="m-5">
        <h1>this is products page </h1>
        <div className='grid grid-cols-3 gap-4'>
            {Array.isArray(products) && products.map((item) => {
                return(
                    <div className='border border-gray-300 p-4 hover:border-blue-400 hover: shadow-lg transition-all duration-300 rounded-xl ' key={item.id}>
                        <img className='w-full h-[300px] rounded-lg object-contain' src={item.image} alt="" />
                        <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
                        <p className='text-sm text-gray-600 mt-1'>{item.description}</p>
                        <p className='text-lg font-semibold mt-2'>${item.price}</p>
                        <p className='text-sm text-gray-600 mt-1'>{item.category}</p>
                        <p className='text-sm text-gray-600 mt-1'>{item.rating?.rate}</p>
                        <p className='text-sm text-gray-600 mt-1'>{item.rating?.count}</p>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default page