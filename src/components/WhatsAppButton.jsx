import { MessageCircle } from 'lucide-react'
import { WHATSAPP_BASE } from '../data/products'

export default function WhatsAppButton() {
  return (
    <a
      href={`${WHATSAPP_BASE}?text=Hello%20Amana%20Poultry%20Farms!%20I%20would%20like%20to%20order%20some%20quail%20eggs.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-body font-600 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
