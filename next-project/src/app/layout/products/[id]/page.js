import React from 'react'

const page = async ({ params }) => {
    const { id } = await params

  return (
    <div> this is product {id} page</div>
  )
}

export default page