import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
  Dumbbell,
  Users,
  HeartPulse,
} from "lucide-react";
import "./styles.css";
const programs = [
  {
    n: "01",
    title: "Strength & conditioning",
    desc: "Build real strength for everyday life.",
    image: "photo-1534438327276-14e5300c3a48",
    tag: "BUILD YOUR BASE",
  },
  {
    n: "02",
    title: "Personal coaching",
    desc: "Expert guidance. Measurable progress.",
    image: "photo-1581009146145-b5ef050c2e1e",
    tag: "MADE FOR YOU",
  },
  {
    n: "03",
    title: "Group training",
    desc: "Train together. Stay motivated.",
    image: "photo-1517836357463-d25dfeac3438",
    tag: "BETTER TOGETHER",
  },
];
function App() {
  const [light, setLight] = useState(false),
    [menu, setMenu] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 24);
    addEventListener("scroll", f);
    const nodes = document.querySelectorAll(
      ".reveal,.program-card,.approach-copy,.community-copy,.membership-content",
    );
    if (!("IntersectionObserver" in window))
      nodes.forEach((n) => n.classList.add("is-visible"));
    else {
      const ob = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              ob.unobserve(e.target);
            }
          }),
        { threshold: 0.12 },
      );
      nodes.forEach((n) => ob.observe(n));
      return () => {
        removeEventListener("scroll", f);
        ob.disconnect();
      };
    }
    return () => removeEventListener("scroll", f);
  }, []);
  const close = () => setMenu(false);
  return (
    <div className={light ? "site light" : "site"} id="top">
      <header className={"nav " + (scrolled ? "nav-scrolled" : "")}>
        <a className="brand" href="#top">
          <span className="brand-mark">
            L<span>.</span>
          </span>
          <span className="brand-copy">
            <b>LIMITLESS</b>
            <small>FITNESS & BEYOND</small>
          </span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {[
            ["About", "#approach"],
            ["Training", "#programs"],
            ["Experiences", "#community"],
            ["Membership", "#membership"],
            ["Contact", "#contact"],
          ].map(([x, y]) => (
            <a key={x} href={y} onClick={close}>
              {x}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setLight(!light)}
            aria-label="Toggle theme"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
            <span className="toggle-track">
              <span className="toggle-knob" />
            </span>
          </button>
          <a className="button button-small" href="#membership">
            Join now <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content reveal">
            <p className="eyebrow">
              STRENGTH <span /> MOVEMENT <span /> COMMUNITY
            </p>
            <h1>
              BUILT FOR
              <br />
              THE LIFE
              <br />
              <em>YOU WANT.</em>
            </h1>
            <p className="hero-description">
              More than a gym. A space to move better,
              <br className="desktop-break" /> feel stronger and become your
              best self.
            </p>
            <div className="hero-buttons">
              <a className="button" href="#programs">
                Explore training <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#membership">
                Visit the club
              </a>
            </div>
          </div>
          <div className="hero-side-note">
            <span>01</span>
            <i />
            TRAIN
            <br />
            TRANSFORM
            <br />
            BELONG
          </div>
          <a href="#approach" className="scroll-cue">
            <span className="scroll-circle">
              <ArrowDown size={15} />
            </span>{" "}
            SCROLL TO EXPLORE
          </a>
          <div className="hero-index">
            LIMITLESS <span>01 / 04</span>
          </div>
        </section>
       
        <section className="approach section-grid" id="approach">
          <div className="approach-photo image-panel">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
              alt="Strength training equipment"
            />
            <span className="photo-caption">
              A SPACE TO RESET. A PLACE TO GROW.
            </span>
          </div>
          <div className="approach-copy">
            <p className="eyebrow">
              OUR APPROACH <span />
            </p>
            <h2>
              Your training.
              <br />
              <em>Your standard.</em>
            </h2>
            <p className="body-copy">
              Personalised training, considered spaces and a community that
              keeps you moving forward. Build habits that last far beyond the
              gym.
            </p>
            <a className="text-link" href="#community">
              Discover our story <ArrowRight size={16} />
            </a>
            <div className="principles">
              <div>
                <Dumbbell />
                <b>Expert coaching</b>
                <span>Guidance that moves you forward.</span>
              </div>
              <div>
                <HeartPulse />
                <b>Personal progress</b>
                <span>Training that fits your goals.</span>
              </div>
              <div>
                <Users />
                <b>Real community</b>
                <span>Find your people. Find your pace.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="programs section-pad" id="programs">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                FIND YOUR PRACTICE <span />
              </p>
              <h2>
                Move with <em>purpose.</em>
              </h2>
            </div>
            <p className="body-copy">
              Different goals. Different starting points.
              <br />
              One space to keep becoming.
            </p>
          </div>
          <div className="program-grid">
            {programs.map((p) => (
              <a className="program-card" href="#contact" key={p.n}>
                <div
                  className="program-photo"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=900&q=85)`,
                  }}
                >
                  <span className="program-number">{p.n}</span>
                  <span className="program-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="program-info">
                  <span>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="membership" id="membership">
          <div className="membership-image" />
          <div className="membership-overlay" />
          <div className="membership-content">
            <p className="eyebrow">
              MEMBERSHIP <span />
            </p>
            <h2>
              A membership for
              <br />
              <em>a stronger you.</em>
            </h2>
            <p>
              Room to focus. People to inspire you.
              <br />A routine that becomes a way of life.
            </p>
            <a className="button" href="#contact">
              Find your fit <ArrowRight size={17} />
            </a>
          </div>
          <div className="membership-aside">
            <span>BETTER TRAINING</span>
            <i />
            <span>BRIGHTER DAYS</span>
            <i />
            <span>STRONGER YOU</span>
          </div>
        </section>
            {/* Horizontal moving fitness cards */}
 <section className="editorial-rail-section">
  <div className="rail-heading">
    <p className="eyebrow">
      THE LIMITLESS METHOD <span />
    </p>
    <h2>
      Find your <em>edge.</em>
    </h2>
    <p className="rail-subtitle">
      Different ways to move. One place to go further.
    </p>
  </div>

  <div className="editorial-rail-window">
    <div className="editorial-rail">
      {(() => {
        const cards = [
          {
            title: "Move freely.",
            label: "01 / MOBILITY",
            image: "photo-1518611012118-696072aa579a",
          },
          {
            title: "Get stronger.",
            label: "02 / STRENGTH",
            image: "photo-1583454110551-21f2fa2afe61",
          },
          {
            title: "Raise your level.",
            label: "03 / PERFORMANCE",
            image: "photo-1534438327276-14e5300c3a48",
          },
          {
            title: "Go together.",
            label: "04 / COMMUNITY",
            image: "photo-1517836357463-d25dfeac3438",
          },
          {
            title: "Find your focus.",
            label: "05 / COACHING",
            image: "photo-1581009146145-b5ef050c2e1e",
          },
          {
            title: "Build endurance.",
            label: "06 / CARDIO",
            image: "photo-1571019613454-1cb2f99b2d8b",
          },
          {
            title: "Recover and recharge.",
            label: "07 / RECOVERY",
            image: "photo-1540497077202-7c8a3999166f",
          },
          {
            title: "Show up stronger.",
            label: "08 / CONSISTENCY",
            image: "photo-1517836357463-d25dfeac3438",
          },
        ];

        return [...cards, ...cards].map((card, index) => (
          <article
            className={`editorial-card ${
              index % 2 === 1 ? "card-short" : "card-tall"
            }`}
            key={`${card.label}-${index}`}
            aria-hidden={index >= cards.length}
          >
            <img
              src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=900&q=85`}
              alt={index >= cards.length ? "" : card.title}
            />

            <div className="editorial-card-caption">
              <span>{card.label}</span>
              <h3>{card.title}</h3>
            </div>
          </article>
        ));
      })()}
    </div>
  </div>

  <div className="rail-footer">
    <span>SCROLL TO EXPLORE</span>
    <span className="rail-line" />
    <span>01 — 08</span>
  </div>
</section>


        <section className="community section-grid" id="community">
          <div className="community-copy">
            <p className="eyebrow">
              OUR COMMUNITY <span />
            </p>
            <h2>
              Make room
              <br />
              <em>for more.</em>
            </h2>
            <p className="body-copy">
              Progress looks different on everyone. Find encouragement,
              celebrate the small wins, and build a stronger life alongside
              people who get it.
            </p>
            <a className="text-link" href="#contact">
              Meet the community <ArrowRight size={16} />
            </a>
          </div>
          <div className="community-photo image-panel">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85"
              alt="Athletes training together"
            />
            <div className="image-quote">
              “Consistency changes
              <br />
              more than your body.”<span>THE LIMITLESS MINDSET</span>
            </div>
          </div>
        </section>
        <section className="contact-strip" id="contact">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>
              Ready to feel <em>limitless?</em>
            </h2>
          </div>
          <a
            className="button"
            href="mailto:info@limitlessfit.in?subject=Membership%20enquiry"
          >
            Start a conversation <ArrowRight size={17} />
          </a>
        </section>

        <section className="location-section" id="location">
  <div className="location-content">
    <p className="eyebrow">
      COME FIND US <span />
    </p>

    <h2>
      Your next chapter
      <br />
      starts <em>here.</em>
    </h2>

    <p className="location-description">
      Your space to train, grow, and become stronger.
      Come visit Limitless Fitness & Beyond.
    </p>

    <div className="location-details">
      <div>
        <span className="location-label">LOCATION</span>
        <p>Limitless, Nagpur, Maharashtra</p>
      </div>
      <div>
        <span className="location-label">COME AS YOU ARE</span>
        <p>Find your strength. Find your people.</p>
      </div>
    </div>

    <a
      className="button"
      href="https://www.google.com/maps?q=21.1483125,79.1334883"
      target="_blank"
      rel="noreferrer"
    >
      Get directions <ArrowUpRight size={17} />
    </a>
  </div>

  <div className="location-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1026580151834!2d79.1334883!3d21.148312499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7e1a3e5569d%3A0xc4e071b8248507be!2sLimitless!5e0!3m2!1sen!2sin!4v1791877512758!5m2!1sen!2sin"
      title="Limitless Fitness location map"
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</section>


      </main>
      <footer className="footer">
        <a className="brand" href="#top">
          <span className="brand-mark">
            L<span>.</span>
          </span>
          <span className="brand-copy">
            <b>LIMITLESS</b>
            <small>FITNESS & BEYOND</small>
          </span>
        </a>
        <span className="footer-note">STRENGTH IN EVERY DIRECTION.</span>
        <div className="footer-links">
          <a href="#programs">Training</a>
          <a href="#membership">Membership</a>
          <a href="#contact">Contact</a>
          <a href="#top">
            <ArrowUpRight size={17} />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Limitless Fitness & Beyond. Independent
          concept demo.
        </p>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
