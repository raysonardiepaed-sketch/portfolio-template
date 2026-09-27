import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const GWS_MARK = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Appointment scheduling',
    marks: [GWS_MARK],
  },
  {
    index: '02',
    title: 'Billing & revenue cycle management',
    marks: [],
  },
  {
    index: '03',
    title: 'Insurance & claims resolution',
    marks: [],
  },
  {
    index: '04',
    title: 'Patient communication',
    marks: [GWS_MARK],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Healthcare operations professional focused on patient scheduling, RCM, and claims.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Three years keeping outpatient practices running smoothly.
            <span> From intake to claims resolution, with HIPAA-level care at every step.</span>
          </p>

          <p className="agrid__note">
            Most recently a <strong>Patient Care Coordinator</strong> supporting a large
            primary care practice and its behavioral health providers - handling
            scheduling, refills, prior authorizations, and patient records with close
            attention to workflow and confidentiality.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Credential name</span>
                <span className="agrid__cell-meta">Credential ID</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Timezone · working hours</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="#">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/logo.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Community or affiliation</span>
                <span className="agrid__cell-meta">Your role there</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/avatar.svg"
            alt="Portrait placeholder"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
