import { useState } from 'react'
import SocialRow from './SocialRow.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ContactSection() {
  const [status, setStatus] = useState('')
  const [ref, revealCls] = useReveal()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    form.reset()
    setStatus('Terima kasih! Pesanmu sudah terkirim (demo).')
  }

  return (
    <section ref={ref} className={`wrap my-section grid items-start gap-12 md:grid-cols-2 ${revealCls}`} id="contact">
      <div>
        <h2 className="display-title mb-6 text-h2">Let's Connect</h2>
        <p className="mb-3 text-muted">
          Say hello at{' '}
          <a href="mailto:m.banyuputraekap@gmail.com" className="link-underline link-underline--accent link-underline--plain">
            m.banyuputraekap@gmail.com
          </a>
        </p>
        <p className="mb-3 text-muted">
          For more info, here's my <a href="#" className="link-underline link-underline--accent">resume</a>
        </p>
        <SocialRow className="mt-6" />
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="cf-name">Name</label>
          <input type="text" id="cf-name" name="name" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input type="email" id="cf-email" name="email" required autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-subject">Subject</label>
          <input type="text" id="cf-subject" name="subject" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows="5" required />
        </div>
        <button type="submit" className="btn self-start">
          Submit <span className="btn__icon" aria-hidden="true">→</span>
        </button>
        <p className="min-h-[1.5em] font-medium text-accent" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  )
}
