import ProductCard from "@/components/ProductCart"
import React from 'react'

const page = async () => {

  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()
  console.log(products)

  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        products.map(elem => {
          return <ProductCard key={elem.id} product={elem} />
        })
      }
    </div>
  )
}

export default page