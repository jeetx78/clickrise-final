"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CONSTANTS
   ========================================================= */

const PHONE = "8527912149";
const PHONE_HREF = `tel:+91${PHONE}`;
const WHATSAPP_HREF = `https://wa.me/91${PHONE}`;
const CONTACT_EMAIL = "admin@clickriseproductions.com";

/* =========================================================
   CLIENTS
   ========================================================= */

const clients = [
  "MIDHAS CREATION",
  "MONTA LUXEX",
  "SAMBRIDHHI",
  "ECOBORN",
  "BE U SALON",
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    n: "01",
    slug: "performance-marketing",
    title: "PERFORMANCE MARKETING",
    short:
      "Meta Ads, Google Ads, lead generation and retargeting.",
    text:
      "Paid acquisition built around the next measurable action — from attention and traffic to qualified leads and conversion.",
    bullets: [
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Retargeting",
      "Campaign Strategy",
      "Analytics",
    ],
  },
  {
    n: "02",
    slug: "social-media",
    title: "SOCIAL MEDIA",
    short:
      "Strategy, content, reels and community.",
    text:
      "A recognisable social presence with a content system that keeps your brand visible, consistent and culturally relevant.",
    bullets: [
      "Social Strategy",
      "Content Calendars",
      "Reels",
      "Creative Direction",
      "Community",
      "Platform Management",
    ],
  },
  {
    n: "03",
    slug: "creative-production",
    title: "CREATIVE PRODUCTION",
    short:
      "Photography, video, campaigns and brand content.",
    text:
      "Visual storytelling made to stop the scroll — from campaign concepts and shoots to social-first edits and brand assets.",
    bullets: [
      "Photography",
      "Video Production",
      "Reels",
      "Campaign Creative",
      "Brand Content",
      "Post Production",
    ],
  },
  {
    n: "04",
    slug: "web-conversion",
    title: "WEB & CONVERSION",
    short:
      "Websites, landing pages, CRO and analytics.",
    text:
      "Digital experiences that turn attention into action, with conversion thinking built into the structure from day one.",
    bullets: [
      "Web Design",
      "Landing Pages",
      "CRO",
      "Analytics",
      "UX Strategy",
      "Conversion Journeys",
    ],
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

const testimonials = [
  {
    quote:
      "ClickRise brought strategy, creative and execution together instead of treating them as separate pieces.",
    name: "Nikki Kaur Makeovers",
    role: "Client",
  },
  {
    quote:
      "The work feels considered from the first idea to the final digital experience.",
    name: "R. Mehta",
    role: "Client",
  },
  {
    quote:
      "A practical creative partner — fast, collaborative and focused on getting the work out.",
    name: "A. Kapoor",
    role: "Client",
  },
];

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  [
    "What services does ClickRise provide?",
    "Performance marketing, social media, creative production and web & conversion work — with strategy connecting the pieces.",
  ],
  [
    "Do you work with small businesses?",
    "Yes. The engagement can be shaped around the stage, goals and available resources of the business.",
  ],
  [
    "Do you manage Meta and Google Ads?",
    "Yes. Paid social and search can be part of a broader acquisition and lead-generation system.",
  ],
  [
    "Do you create content?",
    "Yes. Creative production covers photography, video, campaign assets and ongoing social content.",
  ],
  [
    "How does your pricing work?",
    "Pricing depends on scope, channels, deliverables and the level of ongoing support. Start a conversation and we can scope it properly.",
  ],
  [
    "Do you work outside Delhi NCR?",
    "Yes. Delhi NCR is home base, while digital projects can be delivered remotely.",
  ],
];

/* =========================================================
   REVEAL
   ========================================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: 65,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}

/* =========================================================
   MAGNETIC BUTTON
   ========================================================= */

function Magnetic({
  children,
  className = "",
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className}`}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();

        if (!r) return;

        gsap.to(ref.current, {
          x:
            (e.clientX -
              r.left -
              r.width / 2) *
            0.12,
          y:
            (e.clientY -
              r.top -
              r.height / 2) *
            0.12,
          duration: 0.25,
        });
      }}
      onMouseLeave={() => {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      }}
    >
      {children}
    </a>
  );
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] =
    useState(false);
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const links = [
    ["Work", "#results"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`nav ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="nav-inner container">
        <Link
          href="/"
          className="nav-logo"
        >
          <Image
            src="/clickrise-logo.png"
            alt="ClickRise Productions"
            width={210}
            height={74}
            priority
          />
        </Link>

        <nav>
          <div
            className="services-dropdown"
            onMouseEnter={() =>
              setServicesOpen(true)
            }
            onMouseLeave={() =>
              setServicesOpen(false)
            }
          >
            <button
              className="nav-dropdown-trigger"
              onClick={() =>
                setServicesOpen(
                  (v) => !v
                )
              }
            >
              Services <span>⌄</span>
            </button>

            {servicesOpen && (
              <div className="services-menu">
                {services.map((service) => (
                  <Link
                    href={`/services/${service.slug}`}
                    key={service.slug}
                    onClick={() =>
                      setServicesOpen(false)
                    }
                  >
                    <span>{service.n}</span>

                    <strong>
                      {service.title}
                    </strong>

                    <i>↗</i>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map(([text, href]) => (
            <a
              key={text}
              href={href}
            >
              {text}
            </a>
          ))}
        </nav>

        <Magnetic
          href="#contact"
          className="nav-cta"
        >
          START A PROJECT <b>↗</b>
        </Magnetic>

        <button
          className="menu-toggle"
          onClick={() =>
            setOpen(!open)
          }
          aria-label="Menu"
        >
          <i />
          <i />
        </button>
      </div>

      {open && (
        <div className="mobile-nav container">
          <div className="mobile-services">
            <strong>SERVICES</strong>

            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onClick={() =>
                  setOpen(false)
                }
              >
                {service.title}

                <span>↗</span>
              </Link>
            ))}
          </div>

          {links.map(([text, href]) => (
            <a
              key={text}
              href={href}
              onClick={() =>
                setOpen(false)
              }
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* =========================================================
   MOTION SYSTEM
   ========================================================= */

function MotionSystem() {
  useEffect(() => {
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const groups = [
        ".build-card",
        ".services-top > *",
        ".service",
        ".proof-card",
        ".creative-work-copy",
        ".creative-reel-placeholder",
        ".quotes article",
        ".faq-list button",
        ".contact-grid > *",
      ];

      groups.forEach((selector) => {
        const items =
          gsap.utils.toArray<HTMLElement>(
            selector
          );

        if (!items.length) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 55,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            overwrite: true,
            scrollTrigger: {
              trigger: items[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.utils
        .toArray<HTMLElement>(
          ".section h2"
        )
        .forEach((heading) => {
          gsap.fromTo(
            heading,
            {
              clipPath:
                "inset(0 0 100% 0)",
              y: 30,
            },
            {
              clipPath:
                "inset(0 0 0% 0)",
              y: 0,
              duration: 1.05,
              ease: "power4.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      gsap.to(".hero-grid", {
        xPercent: 2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow", {
        x: 45,
        y: 25,
        scale: 1.05,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(
        ".results-connector .connector-glow",
        {
          strokeDashoffset: -900,
          duration: 5.5,
          repeat: -1,
          ease: "none",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

function CustomCursor() {
  const ref =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;

      gsap.to(ref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.16,
        ease: "power2.out",
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      ref={ref}
      className="cursor"
    >
      <span>↗</span>
    </div>
  );
}

/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function Progress() {
  const ref =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const height =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      if (ref.current) {
        ref.current.style.transform = `scaleX(${
          height
            ? window.scrollY / height
            : 0
        })`;
      }
    };

    window.addEventListener(
      "scroll",
      update
    );

    update();

    return () =>
      window.removeEventListener(
        "scroll",
        update
      );
  }, []);

  return (
    <div
      ref={ref}
      className="progress"
    />
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section
      className="hero"
      id="top"
    >
      <div className="hero-grid" />

      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-meta">
          <span>
            CLICKRISE PRODUCTIONS
          </span>

          <span>
            DELHI NCR · INDIA
          </span>
        </div>

        <div className="hero-layout">
          <div className="hero-title-wrap">
            <div className="kicker">
              <span className="dot" />
              DIGITAL GROWTH PARTNER
            </div>

            <h1>
              WE HELP
              <br />
              <em>BRANDS</em>
              <br />
              RISE.
            </h1>
          </div>

          <div className="hero-reel-wrap">
            <div className="hero-reel">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-reel-poster.svg"
                className="hero-video"
              >
                <source
                  src="/2.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="reel-overlay">
                <span>
                  CLICKRISE / REEL
                </span>

                <b>↗</b>
              </div>

              <span className="reel-caption">
                A QUICK LOOK AT THE WORK ↓
              </span>
            </div>
          </div>

          <div className="hero-copy">
            <p>
              Digital marketing, social
              media, creative production &
              web experiences built for
              measurable growth.
            </p>

            <div className="hero-actions">
              <Magnetic
                href="#contact"
                className="primary"
              >
                START A PROJECT <b>↗</b>
              </Magnetic>

              <a
                href="#results"
                className="text-link"
              >
                SEE OUR WORK ↓
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 — 05</span>

          <span>
            SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BUILD / GROW / REPEAT
   ========================================================= */

function About() {
  return (
    <section
      className="section build-section"
      id="about"
    >
      <div className="container">
        <div className="build-heading">
          <div>
            <div className="eyebrow">
              WHAT WE DO
            </div>

            <h2>
              BUILD.
              <br />
              <em>GROW.</em>
              <br />
              REPEAT.
            </h2>
          </div>

          <p>
            Everything your brand needs to
            build attention, create momentum
            and keep growing.
          </p>
        </div>

        <div className="build-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="build-card"
            >
              <div className="build-card-top">
                <span>{service.n}</span>
                <b>↗</b>
              </div>

              <div className="build-card-content">
                <h3>{service.title}</h3>

                <p>{service.short}</p>
              </div>

              <div className="build-card-footer">
                {service.bullets
                  .slice(0, 4)
                  .map((bullet) => (
                    <span key={bullet}>
                      {bullet}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESULTS
   ========================================================= */

function Results() {
  const cards = [
    {
      n: "01",
      title: "STRATEGY",
      text:
        "Find the signal before making the noise.",
      kicker: "01 / DIRECTION",
      visual: "strategy",
    },
    {
      n: "02",
      title: "CREATIVE",
      text:
        "Give the idea a visual language people remember.",
      kicker: "02 / ATTENTION",
      visual: "creative",
    },
    {
      n: "03",
      title: "PERFORMANCE",
      text:
        "Turn attention into measurable movement.",
      kicker: "03 / MOMENTUM",
      visual: "performance",
    },
    {
      n: "04",
      title: "OPTIMISE",
      text:
        "Keep what works. Cut what does not. Scale the signal.",
      kicker: "04 / GROWTH",
      visual: "optimise",
    },
  ];

  return (
    <section
      className="section results"
      id="results"
    >
      <div className="container">
        <div className="eyebrow">
          PROOF, NOT NOISE
        </div>

        <div className="results-head">
          <h2>
            RESULTS
            <br />
            <em>THAT MATTER.</em>
          </h2>

          <p>
            Four connected moves. One
            system that takes a brand from
            a clear idea to measurable
            growth.
          </p>
        </div>

        <div className="results-stage">
          <svg
            className="results-connector"
            viewBox="0 0 1200 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M30 90 C180 20 240 160 390 90 S600 20 750 90 S960 160 1170 90" />

            <path
              className="connector-glow"
              d="M30 90 C180 20 240 160 390 90 S600 20 750 90 S960 160 1170 90"
            />
          </svg>

          <div className="proof-grid">
            {cards.map((card, index) => (
              <article
                className={`proof-card proof-${card.visual}`}
                style={
                  {
                    "--i": index,
                  } as CSSProperties
                }
                key={card.n}
              >
                <div className="proof-card-top">
                  <span>
                    {card.kicker}
                  </span>

                  <b>{card.n}</b>
                </div>

                <div
                  className={`proof-visual proof-visual-${card.visual}`}
                >
                  {card.visual ===
                    "strategy" && (
                    <>
                      <div className="strategy-grid" />

                      <div className="strategy-crosshair">
                        <span />
                      </div>

                      <div className="strategy-line line-a" />
                      <div className="strategy-line line-b" />
                    </>
                  )}

                  {card.visual ===
                    "creative" && (
                    <>
                      <div className="creative-frame">
                        <div />
                        <span>IDEA</span>
                      </div>

                      <div className="creative-dot dot-a" />
                      <div className="creative-dot dot-b" />
                      <div className="creative-dot dot-c" />
                    </>
                  )}

                  {card.visual ===
                    "performance" && (
                    <>
                      <div className="performance-bars">
                        <i
                          style={
                            {
                              "--h": "32%",
                            } as CSSProperties
                          }
                        />

                        <i
                          style={
                            {
                              "--h": "48%",
                            } as CSSProperties
                          }
                        />

                        <i
                          style={
                            {
                              "--h": "61%",
                            } as CSSProperties
                          }
                        />

                        <i
                          style={
                            {
                              "--h": "76%",
                            } as CSSProperties
                          }
                        />

                        <i
                          style={
                            {
                              "--h": "94%",
                            } as CSSProperties
                          }
                        />
                      </div>

                      <div className="performance-arrow">
                        ↗
                      </div>
                    </>
                  )}

                  {card.visual ===
                    "optimise" && (
                    <>
                      <div className="optimise-dial">
                        <div className="optimise-hand" />

                        <span>
                          OPTIMISE
                        </span>
                      </div>

                      <div className="optimise-pulse" />
                    </>
                  )}
                </div>

                <div className="proof-copy">
                  <strong>
                    {card.title}
                  </strong>

                  <p>
                    {card.text}
                  </p>

                  <i>↗</i>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUSTED BY
   ========================================================= */

function ClientMarquee() {
  return (
    <section className="clients">
      <div className="container">
        <div className="marquee-label">
          TRUSTED BY BUSINESSES ACROSS
          DELHI NCR
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {[...clients, ...clients].map(
            (client, index) => (
              <span key={index}>
                {client}
                <b>✦</b>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CREATIVE WORK
   ========================================================= */

function CreativeWork() {
  return (
    <section className="section creative-work" id="creative-work">
      <div className="container">
        <div className="eyebrow">CREATIVE WORK</div>

        <div className="creative-work-layout">
          {/* LEFT */}
          <div className="creative-work-copy">
            <h2>
              OUR<br />
              <em>CREATIVE WORK.</em>
            </h2>

            <p>
              From reels and campaigns to photography and brand content —
              we create work designed to make people stop, look and remember.
            </p>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="creative-instagram-button"
            >
              VIEW INSTAGRAM <b>↗</b>
            </a>
          </div>

          {/* RIGHT — INSTAGRAM REEL */}
          <div className="creative-reel">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-reel-poster.svg"
            >
              <source src="/camera-shot.mp4" type="video/mp4" />
            </video>

            <div className="creative-reel-overlay">
              <span>CLICKRISE · CREATIVE REEL</span>
              <b>↗</b>
            </div>

            <div className="creative-reel-bottom">
              <span>01</span>
              <span>CREATIVE PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   TESTIMONIALS
   ========================================================= */

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="eyebrow">
          WHAT CLIENTS SAY
        </div>

        <h2>
          GOOD WORK
          <br />
          <em>TRAVELS.</em>
        </h2>

        <div className="quotes">
          {testimonials.map(
            (testimonial) => (
              <article
                key={testimonial.name}
              >
                <span>“</span>

                <p>
                  {testimonial.quote}
                </p>

                <div>
                  <strong>
                    {testimonial.name}
                  </strong>

                  <small>
                    {testimonial.role}
                  </small>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ
   ========================================================= */

function FAQ() {
  const [open, setOpen] =
    useState<number | null>(null);

  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div>
          <div className="eyebrow">
            FAQ
          </div>

          <h2>
            QUESTIONS
            <br />
            <em>ANSWERED.</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map(
            ([question, answer], index) => (
              <button
                key={question}
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
                className={
                  open === index
                    ? "open"
                    : ""
                }
              >
                <span>
                  {question}
                </span>

                <b>
                  {open === index
                    ? "−"
                    : "+"}
                </b>

                {open === index && (
                  <p>{answer}</p>
                )}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  const [sent, setSent] =
    useState(false);

  const [sending, setSending] =
    useState(false);

  const [error, setError] =
    useState("");

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setSending(true);
    setError("");

    const form =
      new FormData(e.currentTarget);

    const payload =
      Object.fromEntries(
        form.entries()
      );

    try {
      const response = await fetch(
        "/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Unable to send"
        );
      }

      setSent(true);

      e.currentTarget.reset();
    } catch {
      setError(
        "We couldn't send that right now. Please call or WhatsApp us directly."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="container">
        <div className="eyebrow">
          START A CONVERSATION
        </div>

        <div className="contact-head">
          <h2>
            HAVE A PROJECT
            <br />
            IN MIND?
            <br />
            <em>
              LET'S MAKE IT RISE.
            </em>
          </h2>

          <p>
            Tell us what you are building,
            where you are stuck, or where
            you want to go next.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <span>DIRECT</span>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>

            <a href={PHONE_HREF}>
              Call +91 {PHONE}
            </a>

            <p>
              Delhi NCR · India
            </p>

            <small>
              MON — FRI
              <br />
              10:00 — 18:00
            </small>
          </div>

          <form onSubmit={submit}>
            <label>
              YOUR NAME

              <input
                required
                name="name"
                placeholder="Your name"
              />
            </label>

            <label>
              EMAIL

              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
              />
            </label>

            <label>
              PHONE

              <input
                name="phone"
                placeholder="+91"
              />
            </label>

            <label>
              WHAT DO YOU NEED?

              <select
                name="need"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Select one
                </option>

                {services.map(
                  (service) => (
                    <option
                      key={service.slug}
                    >
                      {service.title}
                    </option>
                  )
                )}

                <option>
                  Something else
                </option>
              </select>
            </label>

            <label>
              TELL US ABOUT IT

              <textarea
                name="message"
                placeholder="A little context goes a long way..."
                rows={4}
              />
            </label>

            <button
              type="submit"
              disabled={sending}
            >
              {sent
                ? "✓ MESSAGE SENT"
                : sending
                ? "SENDING..."
                : "SEND ENQUIRY"}

              <b>↗</b>
            </button>

            {sent && (
              <p className="sent">
                Thanks — your enquiry
                has been sent.
              </p>
            )}

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHATSAPP
   ========================================================= */

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ClickRise on WhatsApp"
    >
      <span>WA</span>
      <b>CHAT WITH US</b>
    </a>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function Home() {
  return (
    <>
      <Progress />

      <CustomCursor />

      <MotionSystem />

      <Nav />

      <WhatsAppButton />

      <main>
        {/* HERO */}
        <Hero />

        {/* BUILD / GROW / REPEAT */}
        <About />

        

        {/* RESULTS */}
        <Results />

        {/* TRUSTED BY — AFTER RESULTS */}
        <ClientMarquee />

        {/* CREATIVE WORK */}
        <CreativeWork />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* CONTACT */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}