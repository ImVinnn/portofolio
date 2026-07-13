import useReveal from '../hooks/useReveal.js'

export default function ProjectCard({ badge, image, alt, title, desc, meta = [], links = [], flip = false }) {
  const [ref, revealCls] = useReveal()

  return (
    <article ref={ref} className={`grid items-start gap-12 md:grid-cols-[1.1fr_1fr] ${revealCls}`}>
      <div className={`group relative ${flip ? 'md:order-2' : ''}`}>
        <span className="absolute left-4 top-4 z-[1] rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-fg">
          {badge}
        </span>
        <div className="overflow-hidden rounded-card">
          <img
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={alt}
          />
        </div>
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <h3 className="display-title mb-3 text-h3">{title}</h3>
        <p className="mb-6 text-muted">{desc}</p>
        <div className="mb-6 border-t border-line pt-6">
          <h4 className="mb-3 text-[0.8125rem] font-bold uppercase tracking-[0.15em] text-muted">Project Info</h4>
          <dl>
            {meta.map(([term, value], i) => (
              <div
                key={term}
                className="reveal-item flex justify-between border-b border-line py-2.5"
                style={{ '--stagger': `${i * 90}ms` }}
              >
                <dt className="text-[0.9375rem] text-muted">{term}</dt>
                <dd className="text-[0.9375rem] font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-wrap gap-6">
          {links.map(({ href, label, symbol }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className="link-underline reveal-item"
              style={{ '--stagger': `${(meta.length + i) * 90}ms` }}
            >
              {label} <span aria-hidden="true">{symbol}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
