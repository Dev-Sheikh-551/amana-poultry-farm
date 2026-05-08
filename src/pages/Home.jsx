import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ShieldCheck, Clock, Truck, Star, Leaf, Users } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    desc: 'Every egg is hand-inspected before packing. We reject anything less than perfect.',
  },
  {
    icon: Leaf,
    title: 'Naturally Raised',
    desc: 'Our quails roam in clean, spacious pens with natural feed and zero growth hormones.',
  },
  {
    icon: Clock,
    title: 'Farm Fresh Daily',
    desc: 'Eggs are collected and packed each morning, ensuring maximum freshness on delivery.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    desc: 'We maintain consistent stock for both retail and wholesale orders, all year round.',
  },
  {
    icon: Users,
    title: 'Trusted by Businesses',
    desc: 'Hotels, restaurants, and catering companies across The Gambia rely on us weekly.',
  },
  {
    icon: Star,
    title: 'Premium Value',
    desc: 'Competitive prices with no compromise on quality. Bulk discounts always available.',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = () => {
      const scroll = window.scrollY
      el.style.transform = `translateY(${scroll * 0.3}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="bg-cream">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0">
          <div ref={heroRef} className="absolute inset-0 scale-110">
            <img
              src="/images/quail-farm.jpg"
              alt="Quail eggs on a farm"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/80 via-forest-900/70 to-forest-800/50" />
          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-body font-600 uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              2026 Wholesale Collection
            </span>

            <h1 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
              Nature's Most
              <span className="block italic text-gold-400">Nutritious</span>
              Little Egg.
            </h1>

            <p className="mt-6 text-forest-200 font-body text-lg sm:text-xl leading-relaxed max-w-lg">
              Premium quail eggs sourced from healthy farm-raised birds. Retail and wholesale, 
              straight from our farm to your table.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#products"
                className="px-7 py-3.5 bg-forest-500 hover:bg-forest-600 text-white font-body font-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm"
              >
                Browse Products
              </a>
              <a
                href="https://wa.me/2205569155?text=Hello!%20I%20want%20to%20place%20a%20wholesale%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-gold-500 hover:bg-gold-600 text-forest-900 font-body font-600 rounded-xl shadow-gold hover:shadow-lg transition-all duration-200 text-sm"
              >
                Wholesale Enquiry
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-14 flex flex-wrap gap-8">
              {[['200+', 'Families Served'], ['2 Years', 'Experience'], ['100%', 'Farm Fresh']].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="font-display font-bold text-white text-2xl">{num}</p>
                    <p className="text-forest-300 text-xs font-body mt-0.5">{label}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#products"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Our Products"
          title="Fresh From The Farm"
          subtitle="Handpicked, quality-checked, and packed daily. Choose the pack that's right for you."
          start
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-forest-500 text-sm font-body">
            Need a custom order?{' '}
            <a
              href="https://wa.me/2205569155?text=I%20need%20a%20custom%20quail%20egg%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-600 font-600 hover:underline"
            >
              Message us on WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-parchment border-y border-forest-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Amana Poultry?"
            title="Farmed With Integrity, Delivered With Pride"
            subtitle="We don't just sell eggs — we deliver a standard. Here's what sets us apart."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-forest-50 group hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                  <Icon size={20} className="text-forest-600" />
                </div>
                <h3 className="font-display font-semibold text-forest-900 text-lg">{title}</h3>
                <p className="text-forest-500 text-sm font-body mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-forest-700 py-16">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight">
            Ready to Place a Wholesale Order?
          </h2>
          <p className="mt-4 text-forest-200 font-body text-base leading-relaxed">
            Chat with us directly on WhatsApp for the fastest response. We handle bulk orders daily.
          </p>
          <a
            href="https://wa.me/2205569155?text=Hello%20Amana%20Poultry%20Farm!%20I%20want%20to%20discuss%20a%20wholesale%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-forest-900 font-body font-700 rounded-xl shadow-gold text-base transition-all duration-200"
          >
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
