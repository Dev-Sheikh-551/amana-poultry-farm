import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-forest-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-24 h-24 flex items-center justify-center ">
            <img src="/images/amana-logo.png" alt="logo" className='w-24 h-24 object-contain' />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-forest-800 text-lg block leading-none">
              Amana Poultry
            </span>
            <span className="text-[10px] font-body font-500 text-forest-500 tracking-widest uppercase">
              Farms
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-body font-500 transition-all duration-200 ${
                  isActive
                    ? 'bg-forest-600 text-white shadow-sm'
                    : 'text-forest-700 hover:bg-forest-50 hover:text-forest-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/2205938108"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 bg-gold-500 hover:bg-gold-600 text-forest-900 text-sm font-body font-600 rounded-xl shadow-gold transition-all duration-200 hover:shadow-md"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-forest-700 hover:bg-forest-50"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-forest-100 px-4 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-body font-500 transition-colors ${
                  isActive
                    ? 'bg-forest-600 text-white'
                    : 'text-forest-700 hover:bg-forest-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://wa.me/2205938108"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-4 py-3 bg-gold-500 text-forest-900 font-body font-600 rounded-xl text-center"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
