import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-[100] bg-bg/85 backdrop-blur-[8px]">
      <nav className="wrap flex items-center justify-between py-5" aria-label="Navigasi utama">
        <Link to="/" onClick={close} className="text-[1.0625rem] font-bold uppercase tracking-[0.08em]">
          Mohammad Banyuputra Eka Pramudhita
        </Link>

        <button
          type="button"
          className="hidden max-md:flex cursor-pointer flex-col gap-[5px] p-2"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-[22px] bg-fg transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-[22px] bg-fg transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-[22px] bg-fg transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        <ul
          id="nav-menu"
          className={`flex gap-8 max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:gap-0 max-md:border-b max-md:border-line max-md:bg-bg-alt max-md:px-6 max-md:py-4 ${open ? '' : 'max-md:hidden'}`}
        >
          {[
            { to: '/#work', label: 'Work' },
            { to: '/about', label: 'About' },
            { to: '#contact', label: 'Contact', anchor: true },
          ].map(({ to, label, anchor }) => (
            <li key={label} className="max-md:border-b max-md:border-line max-md:last:border-b-0">
              {anchor ? (
                <a href={to} onClick={close} className="block text-[0.9375rem] font-medium text-muted transition-colors hover:text-accent max-md:py-3.5">
                  {label}
                </a>
              ) : (
                <Link to={to} onClick={close} className="block text-[0.9375rem] font-medium text-muted transition-colors hover:text-accent max-md:py-3.5">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
