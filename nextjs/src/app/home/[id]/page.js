import React from 'react'

const page = async ({params}) => {
  const {id} = await params
  return (
    <div>Dynamic route {id}</div>
  )
}

export default page