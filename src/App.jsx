import styles from './App.module.css'

const base = import.meta.env.BASE_URL

const SCREENSHOTS = [
  { src: `${base}screenshots/grid-hello.png`,    alt: 'Grid scratch — Hello written on checkered paper' },
  { src: `${base}screenshots/grid-colorful.png`, alt: 'Grid scratch — bold colorful strokes' },
  { src: `${base}screenshots/pixel-image.png`,   alt: 'Pixel image mode — reveal a photo by scratching' },
  { src: `${base}screenshots/completion.png`,    alt: 'Completion screen with time' },
]

const MODES = [
  {
    icon: '⊞',
    title: 'Checkered Grid',
    desc: 'Fill every cell of a classic squared-paper canvas. Each cell pops with haptic feedback when you cover it.',
  },
  {
    icon: '▭',
    title: 'Whole Paper',
    desc: 'No grid, no rules. Paint an entire canvas however you like and feel the satisfying rumble as you go.',
  },
  {
    icon: '⊡',
    title: 'Pixel Image',
    desc: 'Pick a photo from your library and scratch it away cell by cell to reveal the hidden image beneath.',
  },
]

const FEATURES = [
  { icon: '🏆', text: 'Daily challenges with global leaderboards' },
  { icon: '📳', text: 'Tunable CoreHaptics feedback — from gentle to strong' },
  { icon: '🔍', text: 'Pinch-to-zoom on every canvas' },
  { icon: '↗️', text: 'Save finished artwork to your photo library or share it' },
  { icon: '☁️', text: 'Sessions sync across devices via iCloud' },
  { icon: '⏱', text: 'Per-session timer so you can beat your own best time' },
]

export default function App() {
  return (
    <div className={styles.root}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <img src={`${base}logo.png`} alt="Abrade app icon" className={styles.logoImg} />
          <h1 className={styles.appName}>Abrade</h1>
          <p className={styles.tagline}>Mindless fidgeting,<br />satisfying results.</p>
          <p className={styles.subTagline}>
            A calm, tactile scratching app built for iOS&nbsp;26.
            Keep your hands busy so your mind can rest.
          </p>
          <a
            className={styles.appStoreBtn}
            href="#"
            onClick={e => e.preventDefault()}
            aria-label="Download on the App Store"
          >
            <svg className={styles.appStoreIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.08.05c-.22.15-2.04 1.21-2.02 3.61.03 2.85 2.5 3.81 2.53 3.82-.03.07-.39 1.35-1.27 2.7M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className={styles.screenshots}>
        <div className={styles.phonesRow}>
          {SCREENSHOTS.map((s, i) => (
            <div key={i} className={styles.phoneFrame} style={{ '--i': i }}>
              <img src={s.src} alt={s.alt} className={styles.phoneImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Modes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Three ways to scratch</h2>
        <p className={styles.sectionSub}>Every mode is designed to be mindless, tactile, and satisfying.</p>
        <div className={styles.modesGrid}>
          {MODES.map((m, i) => (
            <div key={i} className={styles.modeCard}>
              <span className={styles.modeIcon}>{m.icon}</span>
              <h3 className={styles.modeTitle}>{m.title}</h3>
              <p className={styles.modeDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Everything you need</h2>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <span className={styles.featureText}>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <h2 className={styles.ctaTitle}>Ready to scratch?</h2>
        <p className={styles.ctaSub}>Free to try — one session per mode on us.</p>
        <a
          className={styles.appStoreBtn}
          href="#"
          onClick={e => e.preventDefault()}
          aria-label="Download on the App Store"
        >
          <svg className={styles.appStoreIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.08.05c-.22.15-2.04 1.21-2.02 3.61.03 2.85 2.5 3.81 2.53 3.82-.03.07-.39 1.35-1.27 2.7M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Download on the App Store
        </a>
      </section>

      {/* ── Privacy ── */}
      <section className={styles.privacy}>
        <div className={styles.privacyInner}>
          <h2 className={styles.privacyTitle}>Privacy</h2>
          <p className={styles.privacyText}>
            Abrade does not collect, store, or share any personal data.
            Your scratch sessions and artwork live entirely on your device and sync
            privately through your own iCloud account — we never see them.
            The app contains no analytics, no tracking SDKs, and no ads.
            Daily challenge leaderboard entries (your chosen nickname and completion time)
            are stored in CloudKit's public database, but only if you explicitly choose to submit them.
            That's it.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <span>© 2026 Abrade</span>
        <span className={styles.footerDot}>·</span>
        <span>Made with ♥ for iOS 26</span>
      </footer>
    </div>
  )
}
