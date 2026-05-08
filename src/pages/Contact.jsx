import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

// ── Replace these with your real EmailJS credentials ──
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bakoteh, Banjul, The Gambia',
    href: null,
  },
  {
    icon: Phone,
    label: 'WhatsApp / Phone',
    value: '+220 5569155',
    href: 'tel:+2205569155',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'amana.1.pourl3@gmail.com',
    href: 'mailto:amana.1.pourl3@gmail.com',
  },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Please enter your name.'
    if (!fields.email.trim()) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Please enter a valid email address.'
    if (!fields.message.trim()) errs.message = 'Please write a message.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields(initialForm)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="bg-cream min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-forest-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-gold-400 text-xs font-body font-600 uppercase tracking-widest mb-4 bg-white/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight">
            We'd Love to Hear<br />
            <span className="italic text-gold-400">From You</span>
          </h1>
          <p className="mt-5 text-forest-200 font-body text-lg max-w-xl mx-auto leading-relaxed">
            Have a question, a wholesale enquiry, or just want to say hello? 
            Fill in the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Contact info panel */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <SectionHeading
                eyebrow="Contact Info"
                title="Reach Us Directly"
              />
              <p className="text-forest-500 font-body text-sm leading-relaxed -mt-4">
                Prefer a quicker response? Message us on WhatsApp — we're usually 
                available from 8 AM to 8 PM daily.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-card border border-forest-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-600 text-forest-400 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-forest-800 font-body text-sm font-500 hover:text-forest-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-forest-800 font-body text-sm font-500">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2205569155?text=Hello%20Amana%20Poultry%20Farm!%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#1dbe5a] text-white font-body font-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.882l6.197-1.624A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.886 9.886 0 01-5.031-1.375l-.361-.214-3.741.981.998-3.648-.235-.374A9.869 9.869 0 012.106 12c0-5.454 4.44-9.894 9.894-9.894 5.455 0 9.895 4.44 9.895 9.894 0 5.455-4.44 9.894-9.895 9.894z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-3xl shadow-card border border-forest-50 p-6 sm:p-8">
              <h2 className="font-display font-bold text-forest-900 text-2xl mb-6">
                Send Us a Message
              </h2>

              {/* Success state */}
              {status === 'success' && (
                <div className="flex items-start gap-3 bg-forest-50 border border-forest-200 rounded-2xl p-4 mb-6">
                  <CheckCircle size={20} className="text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-600 text-forest-800 text-sm">Message sent!</p>
                    <p className="font-body text-forest-600 text-sm mt-0.5">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-600 text-red-700 text-sm">Something went wrong.</p>
                    <p className="font-body text-red-600 text-sm mt-0.5">
                      Please try again or contact us directly on WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-body font-600 text-forest-600 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="e.g. Sheikh Tijan Touray"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-forest-900 bg-cream placeholder-forest-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-forest-300 focus:border-forest-400 ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-forest-100'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-body mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-body font-600 text-forest-600 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="e.g. Sheikh@example.com"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-forest-900 bg-cream placeholder-forest-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-forest-300 focus:border-forest-400 ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-forest-100'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-body mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-body font-600 text-forest-600 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell us about your order, enquiry, or question..."
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-forest-900 bg-cream placeholder-forest-300 outline-none transition-all duration-200 focus:ring-2 focus:ring-forest-300 focus:border-forest-400 resize-none ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-forest-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs font-body mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-forest-600 hover:bg-forest-700 disabled:bg-forest-300 text-white font-body font-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-forest-400 text-xs font-body">
                  We respond within 24 hours on business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
