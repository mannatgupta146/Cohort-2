import ProductCard from "@/components/ProductCart"
import ProtectedRoute from "@/components/ProtectedRoute"
import React from 'react'

const page = async () => {

  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()

  return (
    <ProtectedRoute>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {
        products.map((elem) => {
          return <ProductCard key={elem.id} product={elem} />
        })
      }
    </div>
    </ProtectedRoute>
  )
}

export default page