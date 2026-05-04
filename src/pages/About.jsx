import { Leaf, Heart, Award, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    icon: Leaf,
    title: 'Natural Farming',
    desc: 'We believe in raising quails the right way — with fresh air, clean water, and natural feed. No shortcuts, no chemicals.',
  },
  {
    icon: Heart,
    title: 'Healthy Birds',
    desc: 'Healthy eggs start with healthy birds. Our quails are monitored daily by experienced handlers who treat them with care.',
  },
  {
    icon: Award,
    title: 'Unmatched Quality',
    desc: 'Before any egg leaves our farm, it passes a manual quality check. Size, shell integrity, and freshness are all verified.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'We are a Gambian business serving Gambians. We take pride in contributing to local food security and healthy living.',
  },
]

const team = [
  {
    name: 'Mansour Ceesay',
    role: 'Founder & Head Farmer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Mariama Ceesay',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Ebrima Ceesay',
    role: 'Wholesale Coordinator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
  },
]

export default function About() {
  return (
    <div className="bg-cream min-h-screen pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-800 py-20">
        <div className="absolute inset-0">
          <img
            src="/images/quail-bird.jpg"
            alt="Farm"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 to-forest-800/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-gold-400 text-xs font-body font-600 uppercase tracking-widest mb-4 bg-white/10 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
            From Our Farm<br />
            <span className="italic text-gold-400">To Your Table</span>
          </h1>
          <p className="mt-6 text-forest-200 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Amana Poultry Farms was born out of a simple idea: that every Gambian family deserves 
            access to fresh, nutritious, and affordable protein.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Est. 2025"
              title="A Family Farm Built on Passion"
            />
            <div className="space-y-4 text-forest-600 font-body text-base leading-relaxed">
              <p>
                Amana Poultry Farms started in 2025 with a small backyard flock and a big dream — 
                to make quail eggs widely available across The Gambia. What started as a personal 
                health journey became a mission to serve our community.
              </p>
              <p>
                We are a trusted supplier for 
                restaurants, hotels, and households across Serekunda and beyond. Our 
                birds are raised in spacious, well-ventilated pens with natural feed and zero 
                artificial hormones.
              </p>
              <p>
                We're more than just egg farmers. We're advocates for better nutrition, 
                sustainable agriculture, and local economic growth. Every egg we sell is a 
                reflection of our commitment to doing things right.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/quail-bird.jpg"
              alt="Quail eggs"
              className="rounded-2xl w-full h-44 object-cover shadow-card"
            />
            <img
              src="/images/quail-eggs.jpg"
              alt="Quail farm"
              className="rounded-2xl w-full h-44 object-cover shadow-card mt-6"
            />
            <img
              src="/images/quail-eggs-close-up.jpg"
              alt="Eggs packed"
              className="rounded-2xl w-full h-44 object-cover shadow-card"
            />
            <img
              src="/images/quail-farm.jpg"
              alt="Fresh eggs"
              className="rounded-2xl w-full h-44 object-cover shadow-card mt-6"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-parchment border-y border-forest-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card border border-forest-50 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-forest-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-900 text-lg">{title}</h3>
                  <p className="text-forest-500 text-sm font-body mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Our Team"
          title="The Faces Behind the Farm"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map(({ name, role, image }) => (
            <div key={name} className="text-center group">
              <div className="img-zoom-wrap w-28 h-28 mx-auto rounded-full overflow-hidden shadow-card border-4 border-white">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-semibold text-forest-900 text-lg mt-4">{name}</h4>
              <p className="text-forest-500 text-sm font-body">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['2025', 'Year Founded'],
              ['200+', 'Happy Customers'],
              ['1,000+', 'Eggs Per Week'],
              ['100%', 'Natural Feed'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display font-bold text-gold-400 text-3xl sm:text-4xl">{num}</p>
                <p className="text-forest-300 text-xs font-body mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
