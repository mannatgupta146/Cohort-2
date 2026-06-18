import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-card text-card-foreground rounded-2xl overflow-hidden border border-border hover:border-foreground/45 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-black/50">
      
      <div className="relative bg-muted/40 p-6 overflow-hidden">
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
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
        <h2 className="text-foreground font-semibold text-lg leading-tight line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-muted-foreground">
            {product.rating?.rate || 4.5}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <h3 className="text-emerald-600 dark:text-emerald-400 text-2xl font-bold"> ${product.price} </h3>

          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}