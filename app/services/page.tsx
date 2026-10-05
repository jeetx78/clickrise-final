import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const services = [
  ["01", "performance-marketing", "PERFORMANCE MARKETING", "Meta Ads, Google Ads, lead generation and retargeting."],
  ["02", "social-media", "SOCIAL MEDIA", "Strategy, content, reels and community systems."],
  ["03", "creative-production", "CREATIVE PRODUCTION", "Photography, video, campaigns and brand content."],
  ["04", "web-conversion", "WEB & CONVERSION", "Websites, landing pages, CRO and analytics."],
];

export default function ServicesPage() {
  return <>
  <main className="service-page services-index-page">
    <nav className="service-page-nav container"><Link href="/" className="service-logo"><Image src="/clickrise-logo.png" alt="ClickRise Productions" width={190} height={60} priority /></Link><div><Link href="/">HOME</Link><Link href="/#contact">START A PROJECT ↗</Link></div></nav>
    <section className="service-hero container"><div className="service-index">CLICKRISE / SERVICES</div><div className="service-kicker">ONE CONNECTED GROWTH SYSTEM</div><h1>WHAT WE<br/><em>DO.</em></h1><div className="service-hero-bottom"><p>Four capabilities, connected by strategy. Explore the service that fits the next move for your brand.</p><a href="#all-services">EXPLORE ↘</a></div></section>
    <section className="service-capabilities" id="all-services"><div className="container"><div className="service-bullets">{services.map(([n, slug, title, text]) => <Link href={`/services/${slug}`} key={slug}><small>{n}</small><strong>{title}</strong><span>{text}</span><i>↗</i></Link>)}</div></div></section>
    <section className="service-cta"><div className="container"><span>READY WHEN YOU ARE</span><h2>LET'S MAKE<br/><em>IT RISE.</em></h2><div><a href="/#contact">START A PROJECT ↗</a><a href="tel:+919354588129">CALL +91 9354588129</a></div></div></section>
  </main>
  <Footer />
  </>;
}
