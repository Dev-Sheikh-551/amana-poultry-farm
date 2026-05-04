import { Zap, Shield, Brain, Heart, Droplets, Star, Sun, Leaf } from 'lucide-react'

const iconMap = {
  'High Protein': Zap,
  'Boosts Immunity': Shield,
  'Brain Health': Brain,
  'Low Cholesterol': Heart,
  'Rich in Iron': Droplets,
  'Vitamin B12': Sun,
  'Antioxidants': Leaf,
  'Allergy-Friendly': Star,
  'Daily Nutrients': Sun,
  'Energy Boost': Zap,
  'Heart Healthy': Heart,
  'Natural Source': Leaf,
  'Immune Support': Shield,
  'Rich in Zinc': Droplets,
  'Bone Health': Shield,
  'Kids Nutrition': Heart,
  'Protein Rich': Zap,
  'Natural Goodness': Leaf,
  'High Volume': Zap,
  'Support Eye Health': Zap,
}

export default function BenefitsMarquee({ benefits }) {
  // Duplicate for seamless loop
  const doubled = [...benefits, ...benefits]

  return (
    <div className="overflow-hidden py-2 border-t border-forest-100 bg-forest-50/60 rounded-b-2xl">
      <div className="marquee-track">
        {doubled.map((benefit, i) => {
          const Icon = iconMap[benefit] || Star
          return (
            <span
              key={i}
              className="flex items-center gap-1.5 px-4 text-xs font-body font-500 text-forest-700 whitespace-nowrap"
            >
              <Icon size={11} className="text-gold-500 flex-shrink-0" />
              {benefit}
              <span className="ml-2 text-forest-300">·</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
