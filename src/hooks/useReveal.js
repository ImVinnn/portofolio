import { useEffect, useRef, useState } from 'react'

/* Fade + naik halus saat elemen masuk viewport (sekali saja).
   Pakai: const [ref, revealCls] = useReveal() → <section ref={ref} className={`... ${revealCls}`}> */
export default function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, `reveal ${visible ? 'reveal--visible' : ''}`]
}
