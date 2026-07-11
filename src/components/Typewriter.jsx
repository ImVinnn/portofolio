import { useEffect, useState } from 'react'

/* Efek mengetik per karakter dengan kursor berkedip.
   Teks penuh yang transparan menahan ukuran supaya layout tidak bergeser saat mengetik;
   screen reader membaca teks lengkap lewat span sr-only. */
export default function Typewriter({ lines, speed = 50, startDelay = 400 }) {
  const full = lines.join('\n')
  const [count, setCount] = useState(0)
  const done = count >= full.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(full.length)
      return
    }

    let shown = 0
    let timer
    const tick = () => {
      shown += 1
      setCount(shown)
      if (shown < full.length) timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [full, speed, startDelay])

  const renderLines = (text) =>
    text.split('\n').map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    ))

  return (
    <span className="relative block">
      <span className="sr-only">{lines.join(' ')}</span>
      <span className="invisible" aria-hidden="true">{renderLines(full)}</span>
      <span className="absolute inset-0" aria-hidden="true">
        {renderLines(full.slice(0, count))}
        {!done && <span className="ml-1 inline-block h-[0.75em] w-[3px] animate-caret bg-accent" />}
      </span>
    </span>
  )
}
