"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "9354588129";
const PHONE_HREF = `tel:+91${PHONE}`;
const WHATSAPP_HREF = `https://wa.me/91${PHONE}`;
const CONTACT_EMAIL = "hello@clickrise.in";

const clients = ["MIDHAS CREATION", "MONTA LUXEX", "SAMBRIDHHI", "ECOBORN", "BE U SALON"];

const services = [
  {
    n: "01",
    slug: "performance-marketing",
    title: "PERFORMANCE MARKETING",
    short: "Meta Ads, Google Ads, lead generation and retargeting.",
    text: "Paid acquisition built around the next measurable action — from attention and traffic to qualified leads and conversion.",
    bullets: ["Meta Ads", "Google Ads", "Lead Generation", "Retargeting", "Campaign Strategy", "Analytics"],
  },
  {
    n: "02",
    slug: "social-media",
    title: "SOCIAL MEDIA",
    short: "Strategy, content, reels and community.",
    text: "A recognisable social presence with a content system that keeps your brand visible, consistent and culturally relevant.",
    bullets: ["Social Strategy", "Content Calendars", "Reels", "Creative Direction", "Community", "Platform Management"],
  },
  {
    n: "03",
    slug: "creative-production",
    title: "CREATIVE PRODUCTION",
    short: "Photography, video, campaigns and brand content.",
    text: "Visual storytelling made to stop the scroll — from campaign concepts and shoots to social-first edits and brand assets.",
    bullets: ["Photography", "Video Production", "Reels", "Campaign Creative", "Brand Content", "Post Production"],
  },
  {
    n: "04",
    slug: "web-conversion",
    title: "WEB & CONVERSION",
    short: "Websites, landing pages, CRO and analytics.",
    text: "Digital experiences that turn attention into action, with conversion thinking built into the structure from day one.",
    bullets: ["Web Design", "Landing Pages", "CRO", "Analytics", "UX Strategy", "Conversion Journeys"],
  },
];



const testimonials = [
  { quote: "ClickRise brought strategy, creative and execution together instead of treating them as separate pieces.", name: "Nikki Kaur Makeovers", role: "Client" },
  { quote: "The work feels considered from the first idea to the final digital experience.", name: "R. Mehta", role: "Client" },
  { quote: "A practical creative partner — fast, collaborative and focused on getting the work out.", name: "A. Kapoor", role: "Client" },
];

const faqs = [
  ["What services does ClickRise provide?", "Performance marketing, social media, creative production and web & conversion work — with strategy connecting the pieces."],
  ["Do you work with small businesses?", "Yes. The engagement can be shaped around the stage, goals and available resources of the business."],
  ["Do you manage Meta and Google Ads?", "Yes. Paid social and search can be part of a broader acquisition and lead-generation system."],
  ["Do you create content?", "Yes. Creative production covers photography, video, campaign assets and ongoing social content."],
  ["How does your pricing work?", "Pricing depends on scope, channels, deliverables and the level of ongoing support. Start a conversation and we can scope it properly."],
  ["Do you work outside Delhi NCR?", "Yes. Delhi NCR is home base, while digital projects can be delivered remotely."],
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { y: 65, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%", once: true } });
    }, el);
    return () => ctx.revert();
  }, []);
  return ref;
}

function Magnetic({ children, className = "", href = "#" }: { children: React.ReactNode; className?: string; href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return <a ref={ref} href={href} className={`magnetic ${className}`} onMouseMove={(e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * .12, y: (e.clientY - r.top - r.height / 2) * .12, duration: .25 }); }} onMouseLeave={() => gsap.to(ref.current, { x: 0, y: 0, duration: .35, ease: "power3.out" })}>{children}</a>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 40); addEventListener("scroll", f); f(); return () => removeEventListener("scroll", f); }, []);
  const links = [["Work", "#results"], ["About", "#about"], ["Contact", "#contact"]];
  return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}><div className="nav-inner container">
    <Link href="/" className="nav-logo"><Image src="/clickrise-logo.png" alt="ClickRise Productions" width={210} height={74} priority /></Link>
    <nav>
      <div className="services-dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
        <button className="nav-dropdown-trigger" onClick={() => setServicesOpen(v => !v)}>Services <span>⌄</span></button>
        {servicesOpen && <div className="services-menu">{services.map(s => <Link href={`/services/${s.slug}`} key={s.slug} onClick={() => setServicesOpen(false)}><span>{s.n}</span><strong>{s.title}</strong><i>↗</i></Link>)}</div>}
      </div>
      {links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
    </nav>
    <Magnetic href="#contact" className="nav-cta">START A PROJECT <b>↗</b></Magnetic>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu"><i/><i/></button>
  </div>{open && <div className="mobile-nav container"><div className="mobile-services"><strong>SERVICES</strong>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>{s.title} <span>↗</span></Link>)}</div>{links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}</div>}</header>;
}

function MotionSystem() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const groups = [
        ".about-grid > *",
        ".services-top > *",
        ".service",
                ".proof-card",
        ".funnel-node",
        ".step",
        ".quotes article",
        ".faq-list button",
        ".contact-grid > *",
      ];
      groups.forEach((selector) => {
        const items = gsap.utils.toArray<HTMLElement>(selector);
        if (!items.length) return;
        gsap.fromTo(items, { opacity: 0, y: 55 }, { opacity: 1, y: 0, duration: .8, stagger: .09, ease: "power3.out", overwrite: true, scrollTrigger: { trigger: items[0], start: "top 88%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>(".section h2").forEach((heading) => {
        gsap.fromTo(heading, { clipPath: "inset(0 0 100% 0)", y: 30 }, { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.05, ease: "power4.out", scrollTrigger: { trigger: heading, start: "top 88%", once: true } });
      });

      gsap.to(".hero-grid", { xPercent: 2, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-glow", { x: 45, y: 25, scale: 1.05, duration: 5.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".results-connector .connector-glow", { strokeDashoffset: -900, duration: 5.5, repeat: -1, ease: "none" });
      gsap.to(".funnel-beam", { yPercent: 100, duration: 2.8, repeat: -1, ease: "none" });
    });
    return () => ctx.revert();
  }, []);
  return null;
}

function CustomCursor() { const ref = useRef<HTMLDivElement>(null); useEffect(() => { const move = (e: MouseEvent) => { if (!ref.current) return; gsap.to(ref.current, { x: e.clientX, y: e.clientY, duration: .16, ease: "power2.out" }); }; addEventListener("mousemove", move); return () => removeEventListener("mousemove", move); }, []); return <div ref={ref} className="cursor"><span>↗</span></div>; }
function Progress() { const ref = useRef<HTMLDivElement>(null); useEffect(() => { const f = () => { const h = document.documentElement.scrollHeight - innerHeight; if (ref.current) ref.current.style.transform = `scaleX(${h ? scrollY / h : 0})`; }; addEventListener("scroll", f); f(); return () => removeEventListener("scroll", f); }, []); return <div ref={ref} className="progress"/>; }

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-meta">
          <span>CLICKRISE PRODUCTIONS</span>
          <span>DELHI NCR · INDIA</span>
        </div>

        <div className="hero-layout">
          <div className="hero-title-wrap">
            <div className="kicker">
              <span className="dot" /> DIGITAL GROWTH PARTNER
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
                <source src="/camera-shot.mp4" type="video/mp4" />
              </video>
              <div className="reel-overlay">
                <span>CLICKRISE / REEL</span>
                <b>↗</b>
              </div>
              <span className="reel-caption">A QUICK LOOK AT THE WORK ↓</span>
            </div>

            <div className="hero-copy">
              <p>
                Digital marketing, social media, creative production & web
                experiences built for measurable growth.
              </p>
              <div className="hero-actions">
                <Magnetic href="#contact" className="primary">
                  START A PROJECT <b>↗</b>
                </Magnetic>
                <a href="#results" className="text-link">
                  SEE OUR WORK ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 — 05</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}

function ClientMarquee() { return <section className="clients"><div className="marquee-label">TRUSTED BY BUSINESSES ACROSS DELHI NCR</div><div className="marquee"><div className="marquee-track">{[...clients, ...clients].map((x, i) => <span key={i}>{x}<b>✦</b></span>)}</div></div></section>; }
function About() { return <section className="section about" id="about"><div className="container"><div className="eyebrow">MORE THAN AN AGENCY</div><div className="about-grid"><h2>YOUR BRAND<br/><em>SHOULD MOVE.</em></h2><div><p className="lead">ClickRise brings strategy, creative and digital execution together under one roof.</p><p>We build the systems around a brand — from the first impression to the campaign, website, content and next conversion.</p><a className="line-link" href="#services">EXPLORE WHAT WE DO ↗</a></div></div></div></section>; }

function Services() { return <section className="section services" id="services"><div className="container"><div className="services-top"><div><div className="eyebrow">WHAT WE ACTUALLY DO</div><h2>BUILD.<br/><em>GROW.</em><br/>REPEAT.</h2></div><p>Four capabilities. One connected growth system. Open a service to explore it in detail.</p></div><div className="service-list">{services.map(s => <Link href={`/services/${s.slug}`} className="service" key={s.n} onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`); }}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.short}</p></div><i>↗</i><div className="service-light"/></Link>)}</div></div></section>; }

function Results() {
  const cards = [
    { n: "01", title: "STRATEGY", text: "Find the signal before making the noise.", kicker: "01 / DIRECTION" , visual: "strategy",},
    { n: "02", title: "CREATIVE", text: "Give the idea a visual language people remember.", kicker: "02 / ATTENTION", visual: "creative",},
    { n: "03", title: "PERFORMANCE", text: "Turn attention into measurable movement.", kicker: "03 / MOMENTUM", visual: "performance",},
    { n: "04", title: "OPTIMISE", text: "Keep what works. Cut what does not. Scale the signal.", kicker: "04 / GROWTH" , visual: "optimise",},
  ];
  return (
    <section className="section results" id="results">
      <div className="container">
        <div className="eyebrow">PROOF, NOT NOISE</div>

        <div className="results-head">
          <h2>
            RESULTS
            <br />
            <em>THAT MATTER.</em>
          </h2>

          <p>
            Four connected moves. One system that takes a brand from a clear
            idea to measurable growth.
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
            {cards.map((x, i) => (
              <article
                className={`proof-card proof-${x.visual}`}
                style={{ "--i": i } as CSSProperties}
                key={x.n}
              >
                <div className="proof-card-top">
                  <span>{x.kicker}</span>
                  <b>{x.n}</b>
                </div>

                <div className={`proof-visual proof-visual-${x.visual}`}>
                  {x.visual === "strategy" && (
                    <>
                      <div className="strategy-grid" />
                      <div className="strategy-crosshair">
                        <span />
                      </div>
                      <div className="strategy-line line-a" />
                      <div className="strategy-line line-b" />
                    </>
                  )}

                  {x.visual === "creative" && (
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

                  {x.visual === "performance" && (
                    <>
                      <div className="performance-bars">
                        <i style={{ "--h": "32%" } as CSSProperties} />
                        <i style={{ "--h": "48%" } as CSSProperties} />
                        <i style={{ "--h": "61%" } as CSSProperties} />
                        <i style={{ "--h": "76%" } as CSSProperties} />
                        <i style={{ "--h": "94%" } as CSSProperties} />
                      </div>

                      <div className="performance-arrow">↗</div>
                    </>
                  )}

                  {x.visual === "optimise" && (
                    <>
                      <div className="optimise-dial">
                        <div className="optimise-hand" />
                        <span>OPTIMISE</span>
                      </div>
                      <div className="optimise-pulse" />
                    </>
                  )}
                </div>

                <div className="proof-copy">
                  <strong>{x.title}</strong>
                  <p>{x.text}</p>
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


function Funnel() { return <section className="section funnel" id="funnel"><div className="container"><div className="eyebrow">THE CLICKRISE GROWTH FUNNEL</div><div className="funnel-grid"><div><h2>TURN<br/><em>ATTENTION</em><br/>INTO ACTION.</h2><p>Social, content, ads and web work together as one connected path — not four separate channels.</p></div><div className="funnel-visual"><div className="funnel-rail"><span className="funnel-beam"/></div>{["ATTENTION","INTEREST","LEAD","CONVERSION","GROWTH"].map((x, i) => <div className="funnel-node" style={{ "--i": i } as CSSProperties} key={x}><span>{String(i + 1).padStart(2, "0")}</span><strong>{x}</strong><i>↓</i></div>)}</div></div></div></section>; }
function Process() { return <section className="section process" id="process"><div className="container process-grid"><div className="process-sticky"><div className="eyebrow">HOW WE WORK</div><h2>DISCOVER.<br/>STRATEGY.<br/><em>EXECUTE.</em><br/>OPTIMISE.</h2><p>One loop. Four stages. No mystery.</p></div><div>{[["01","DISCOVER","Understand your business, audience and objectives."],["02","STRATEGY","Build the growth plan, channels and creative direction."],["03","EXECUTE","Campaigns. Content. Web. Creative."],["04","OPTIMISE","Measure. Learn. Improve. Scale."]].map(x => <article className="step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><i>↗</i></article>)}</div></div></section>; }
function GrowthLoop() { return <section className="section loop"><div className="container"><div className="eyebrow">THE GROWTH LOOP</div><div className="loop-wrap"><div><h2>CLICK <em>→</em><br/>RISE.</h2><p>Create → Distribute → Measure → Optimise → Scale.</p></div><div className="loop-ring"><div>CREATE</div><div>DISTRIBUTE</div><div>MEASURE</div><div>OPTIMISE</div><div>SCALE</div><span>↻</span></div></div></div></section>; }
function Testimonials() { return <section className="section testimonials"><div className="container"><div className="eyebrow">WHAT CLIENTS SAY</div><h2>GOOD WORK<br/><em>TRAVELS.</em></h2><div className="quotes">{testimonials.map(t => <article key={t.name}><span>“</span><p>{t.quote}</p><div><strong>{t.name}</strong><small>{t.role}</small></div></article>)}</div></div></section>; }
function FAQ() { const [open, setOpen] = useState<number | null>(null); return <section className="section faq"><div className="container faq-grid"><div><div className="eyebrow">FAQ</div><h2>QUESTIONS<br/><em>ANSWERED.</em></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <button key={q} onClick={() => setOpen(open === i ? null : i)} className={open === i ? "open" : ""}><span>{q}</span><b>{open === i ? "−" : "+"}</b>{open === i && <p>{a}</p>}</button>)}</div></div></section>; }

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSending(true); setError("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try { const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); if (!res.ok) throw new Error("Unable to send"); setSent(true); e.currentTarget.reset(); } catch { setError("We couldn't send that right now. Please call or WhatsApp us directly."); } finally { setSending(false); }
  }
  return <section className="contact" id="contact"><div className="container"><div className="eyebrow">START A CONVERSATION</div><div className="contact-head"><h2>HAVE A PROJECT<br/>IN MIND?<br/><em>LET'S MAKE IT RISE.</em></h2><p>Tell us what you are building, where you are stuck, or where you want to go next.</p></div><div className="contact-grid"><div className="contact-info"><span>DIRECT</span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={PHONE_HREF}>Call +91 {PHONE}</a><p>Delhi NCR · India</p><small>MON — FRI<br/>10:00 — 18:00</small></div><form onSubmit={submit}><label>YOUR NAME<input required name="name" placeholder="Your name"/></label><label>EMAIL<input required type="email" name="email" placeholder="you@company.com"/></label><label>PHONE<input name="phone" placeholder="+91"/></label><label>WHAT DO YOU NEED?<select name="need" defaultValue=""><option value="" disabled>Select one</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}<option>Something else</option></select></label><label>TELL US ABOUT IT<textarea name="message" placeholder="A little context goes a long way..." rows={4}/></label><button type="submit" disabled={sending}>{sent ? "✓ MESSAGE SENT" : sending ? "SENDING..." : "SEND ENQUIRY"} <b>↗</b></button>{sent && <p className="sent">Thanks — your enquiry has been sent.</p>}{error && <p className="form-error">{error}</p>}</form></div></div></section>;
}

function WhatsAppButton() {
  return <a className="whatsapp-float" href={WHATSAPP_HREF} target="_blank" rel="noreferrer" aria-label="Chat with ClickRise on WhatsApp"><span>WA</span><b>CHAT WITH US</b></a>;
}

export default function Home() { return <><Progress/><CustomCursor/><MotionSystem/><Nav/><WhatsAppButton/><main><Hero/><ClientMarquee/><About/><Services/><Results/><Funnel/><Process/><GrowthLoop/><Testimonials/><FAQ/><Contact/></main><Footer/></>; }
