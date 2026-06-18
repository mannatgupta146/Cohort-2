import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-zinc-950/50">
      
      <div className="relative bg-zinc-100/80 dark:bg-zinc-800/40 p-6 overflow-hidden">
        <span className="absolute top-3 left-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </span>

        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>

      <div className="p-5">
        <h2 className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg leading-tight line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>


        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {product.rating?.rate || 4.5}
          </span>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <h3 className="text-emerald-600 dark:text-emerald-400 text-2xl font-bold">
            ₹{Math.round(product.price * 83).toLocaleString('en-IN')}
          </h3>

          <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}