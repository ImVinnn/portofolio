import { Link } from 'react-router-dom'
import SocialRow from '../components/SocialRow.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ContactSection from '../components/ContactSection.jsx'

const projects = [
  {
    badge: 'Tugas Project Kuliah',
    image: '/images/Project3.png',
    alt: 'Screenshot Rolling Ball 3D Game',
    title: 'Rolling Ball 3D Game',
    desc: 'Game 3D sederhana di mana pemain menggerakkan bola menggelinding melewati arena. Dibangun dari nol menggunakan bahasa C dengan library GLUT (OpenGL) di IDE Dev-C++.',
    meta: [
      ['Tahun', '2026'],
      ['Role', 'Developer'],
      ['Tech Stack', 'C, GLUT (OpenGL), Dev-C++'],
    ],
    links: [
      { href: 'https://youtu.be/gWCbuhPp0aA?si=42L47AeiGo4RukSh', label: 'YOUtube video', symbol: '↗' },
      { href: 'https://github.com/ImVinnn/Project-Game-GTI', label: 'See on GitHub', symbol: '⌥' },
    ],
  },
  {
    badge: 'Tugas Project Kuliah',
    image: '/images/Project2.png',
    alt: 'Screenshot Kreasia — AI Social Media Analyzer',
    title: 'Kreasia — AI Social Media Analyzer',
    desc: 'Aplikasi web untuk menganalisis konten media sosial dengan bantuan AI. Dikerjakan sebagai tugas project matakuliah Kecerdasan Buatan dan di-deploy secara online di Vercel.',
    meta: [
      ['Tahun', '2026'],
      ['Role', 'Developer'],
    ],
    links: [
      { href: 'https://kreasia-ai-social-media-analyzer.vercel.app/', label: 'Live Demo', symbol: '↗' },
    ],
    flip: true,
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="wrap mb-section mt-10 grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Portofolio Pribadi</p>
          <h1 className="display-title mb-6 text-h1">
            Hi, I am<br />Mohammad Banyuputra Eka Pramudhita.
          </h1>
          <p className="mb-12 max-w-[32rem] text-muted">Mahasiswa Informatika yang suka mempelajari hal-hal baru.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#contact" className="btn">
              Contact Me <span className="btn__icon" aria-hidden="true"><i className="fa-solid fa-envelope" /></span>
            </a>
            <SocialRow />
          </div>
        </div>
        <div className="max-md:order-first max-md:max-w-80">
          <img
            className="mx-auto aspect-[4/5] w-full max-w-96 rounded-card object-cover"
            src="/images/awsAS.jpg"
            alt="Foto diri Mohammad Banyuputra Eka Pramudhita"
          />
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="wrap my-section" id="work">
        <div className="mb-12">
          <h2 className="display-title text-h2">Featured Projects</h2>
          <p className="mt-3 max-w-[40rem] text-muted">Beberapa proyek pilihan — dari tugas kuliah sampai project pribadi.</p>
        </div>
        <div className="flex flex-col gap-section">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="wrap my-section">
        <p className="eyebrow">About Me</p>
        <h2 className="display-title mb-6 text-h2 leading-[1.1]">
          Mahasiswa yang suka belajar dengan<br />membuat hal-hal baru.
        </h2>
        <p className="mb-6 max-w-[42rem] text-muted">
          Saya seorang dev yang tertarik pada pengembangan web dan pemrograman. Sebagian besar proyek saya berawal dari
          tugas kuliah, lalu saya kembangkan lebih jauh untuk portofolio pribadi dan latihan skill baru.
        </p>
        <Link to="/about" className="link-underline link-underline--accent">
          More About Me <span aria-hidden="true"></span>
        </Link>
      </section>

      {/* ===== CONTACT ===== */}
      <ContactSection />
    </>
  )
}
