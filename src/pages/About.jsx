import SocialRow from '../components/SocialRow.jsx'
import ContactSection from '../components/ContactSection.jsx'
import useReveal from '../hooks/useReveal.js'

const skills = [
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C', icon: 'https://cdn.simpleicons.org/c' },
]

export default function About() {
  const [capRef, capCls] = useReveal()
  const [expRef, expCls] = useReveal()

  return (
    <>
      {/* ===== ABOUT ME ===== */}
      <section className="wrap my-section animate-rise">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
          <h1 className="display-title text-h2">About Me</h1>
          <div>
            <h2 className="display-title mb-6 text-h3 leading-[1.15]">
              Belajar dengan membangun,<br />berkembang lewat berbagi.
            </h2>
            <p className="mb-12 text-muted">
              Saya seorang mahasiswa Informatika yang tertarik pada pengembangan web dan pemrograman. Sebagian besar
              proyek saya berawal dari tugas kuliah, lalu saya kembangkan lebih jauh untuk portofolio pribadi dan
              latihan skill baru. Saat tidak coding, saya suka bermain game seperti honkai star rail dan game hoyovers
              lainya, saya juga hobi mempelajari dan mengikuti perkembangan dari A.I yang selalu berkembang setiap
              harinya.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {/* Sementara belum ada file resume — tombol tidak melakukan apa-apa */}
              <button type="button" className="btn" aria-disabled="true">
                Download Resume <span className="btn__icon" aria-hidden="true"><i className="fa-solid fa-download" /></span>
              </button>
              <SocialRow />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MY CAPABILITIES ===== */}
      <section ref={capRef} className={`wrap my-section ${capCls}`}>
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
          <h2 className="display-title text-h2">My Capabilities</h2>
        </div>
        <ul className="mt-12 flex flex-wrap gap-3">
          {skills.map(({ name, icon }, i) => (
            <li key={name} className="skill-pill reveal-item" style={{ '--stagger': `${i * 60}ms` }}>
              <img className="size-5" src={icon} alt="" width="20" height="20" loading="lazy" />
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== MY EXPERIENCE ===== */}
      <section ref={expRef} className={`wrap my-section ${expCls}`}>
        <h2 className="display-title text-h2">My Experience</h2>
        <div className="mt-12 flex flex-col">
          <article className="flex items-start gap-6 border-y border-line py-12">
            <img
              className="size-18 shrink-0 rounded-xl bg-bg-alt object-contain"
              src={`${import.meta.env.BASE_URL}images/logo-HMIF.jpg`}
              alt="Logo HMIF Universitas Diponegoro"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-6 max-md:flex-col max-md:gap-1">
                <h3 className="text-xl font-bold">Pengurus Himpunan Mahasiswa Informatika (HMIF)</h3>
                <p className="whitespace-nowrap text-[0.9375rem] text-muted">31 Maret 2026 – Sekarang</p>
              </div>
              <p className="mb-3 mt-1.5 font-semibold text-accent">Universitas Diponegoro</p>
              <p className="max-w-[44rem] text-muted">
                Berperan sebagai staf ahli di Divisi Ekonomi dan Keuangan Himpunan Mahasiswa Informatika. Mengelola
                agenda Klinik Komputer yang menangani keluhan dan perbaikan laptop/PC mahasiswa, serta pengurus dari
                program I-PRO (Informatics Open Project) sebagai penyedia layanan solusi web, aplikasi mobile, dan game
                bagi pihak eksternal.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <ContactSection />
    </>
  )
}
