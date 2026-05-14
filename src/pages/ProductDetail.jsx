import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Lightbulb, MessageCircle, ShoppingCart } from 'lucide-react'
import { products, WHATSAPP_BASE } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream pt-16">
        <p className="font-display text-2xl text-forest-700 mb-4">Product not found.</p>
        <Link to="/" className="text-forest-600 hover:underline font-body">
          ← Back to Home
        </Link>
      </div>
    )
  }

  const { name, price, description, image, benefits, tips, tag } = product

  const waMessage = encodeURIComponent(
    `Hello Amana Poultry Farm! I'd like to order: *${name}* (GMD ${price}). Please confirm availability.`
  )

  const related = products.filter((p) => p.id !== id).slice(0, 3)

  return (
    <div className="bg-cream min-h-screen pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-forest-600 hover:text-forest-800 font-body text-sm font-500 mb-8 hover:-translate-x-0.5 transition-transform"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Top card — image + summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-card p-6 sm:p-8 border border-forest-50">

          {/* Image */}
          <div className="img-zoom-wrap rounded-2xl overflow-hidden relative">
            <img
              src={image}
              alt={name}
              className="w-full h-72 sm:h-80 object-cover"
            />
            {tag && (
              <span className="absolute top-4 left-4 bg-gold-500 text-forest-900 text-xs font-body font-600 px-3 py-1 rounded-full uppercase tracking-wide">
                {tag}
              </span>
            )}
          </div>

          {/* Name, price, description + CTAs */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <span className="text-xs font-body font-600 text-forest-500 uppercase tracking-widest">
                Amana Poultry Farm
              </span>
              <h1 className="font-display font-bold text-forest-900 text-3xl sm:text-4xl mt-1 leading-tight">
                {name}
              </h1>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-xs text-forest-400 font-body">For</span>
                <span className="font-display font-bold text-forest-800 text-3xl">
                  GMD {price.toLocaleString()}
                </span>
              </div>
              <p className="text-forest-500 font-body text-base mt-4 leading-relaxed">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
              
                href={`${WHATSAPP_BASE}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#1dbe5a] text-white font-body font-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </a>
              <Link
                to="/"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-forest-50 hover:bg-forest-100 text-forest-700 font-body font-600 rounded-xl border border-forest-100 transition-all duration-200 text-sm"
              >
                <ShoppingCart size={18} />
                See All Products
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits + Tips side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

          {/* Health Benefits */}
          <div className="bg-white rounded-2xl shadow-card border border-forest-50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-forest-600" />
              </div>
              <h3 className="font-display font-semibold text-forest-900 text-lg">
                Health Benefits
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={15}
                    className="text-forest-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm font-body text-forest-700 leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage & Usage Tips */}
          <div className="bg-white rounded-2xl shadow-card border border-gold-300/40 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-300/30 flex items-center justify-center">
                <Lightbulb size={16} className="text-gold-600" />
              </div>
              <h3 className="font-display font-semibold text-forest-900 text-lg">
                Storage & Usage Tips
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <Lightbulb
                    size={15}
                    className="text-gold-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm font-body text-forest-700 leading-snug">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display font-bold text-forest-900 text-2xl mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-forest-50 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="img-zoom-wrap h-40 overflow-hidden">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display font-semibold text-forest-800 text-base leading-tight">
                      {rp.name}
                    </h4>
                    <p className="text-forest-600 font-body font-bold text-sm mt-1">
                      GMD {rp.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}