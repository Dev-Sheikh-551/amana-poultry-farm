import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import BenefitsMarquee from './BenefitsMarquee'

export default function ProductCard({ product }) {
  const { id, name, price, description, image, benefits, tag } = product

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-400 flex flex-col overflow-hidden border border-forest-50 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="img-zoom-wrap relative h-52">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-gold-500 text-forest-900 text-[10px] font-body font-600 px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
            {tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="font-display font-semibold text-forest-900 text-lg leading-tight">{name}</h3>
          <p className="text-forest-500 text-sm font-body mt-1 leading-relaxed line-clamp-2">{description}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-[11px] text-forest-400 font-body uppercase tracking-wider">From</span>
            <p className="text-forest-800 font-display font-bold text-xl">
              GMD {price.toLocaleString()}
            </p>
          </div>
          <span className="w-9 h-9 rounded-xl bg-forest-600 group-hover:bg-forest-700 flex items-center justify-center shadow-sm transition-colors">
            <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>

      {/* Scrolling benefits row */}
      <BenefitsMarquee benefits={benefits} />
    </Link>
  )
}
