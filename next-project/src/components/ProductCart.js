export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      <div className="relative bg-gray-100 p-6 overflow-hidden">
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="text-black font-semibold text-lg leading-tight line-clamp-2 min-h-[56px]">
        {product.title}
        </h2>


        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">
            {product.rating?.rate || 4.5}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <h3 className="text-green-600 text-2xl font-bold"> ${product.price} </h3>

          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}