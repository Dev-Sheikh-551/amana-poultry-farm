export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-body font-600 text-forest-600 uppercase tracking-widest mb-2 bg-forest-50 px-3 py-1 rounded-full border border-forest-100">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-forest-900 text-3xl sm:text-4xl leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-forest-500 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
