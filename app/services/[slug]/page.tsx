import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Footer";

const PHONE = "9354588129";

const services = {
  "performance-marketing": {
    n: "01",
    title: "PERFORMANCE MARKETING",
    intro:
      "Turn attention into qualified action with paid media, lead generation and retargeting built around measurable business goals.",
    bullets: [
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Retargeting",
      "Campaign Strategy",
      "Analytics",
    ],
    accent: "PAID MEDIA / ACQUISITION",
  },

  "social-media": {
    n: "02",
    title: "SOCIAL MEDIA",
    intro:
      "Build a social presence people recognise — with strategy, content, reels and community systems designed for consistency and momentum.",
    bullets: [
      "Social Strategy",
      "Content Calendars",
      "Reels",
      "Creative Direction",
      "Community",
      "Platform Management",
    ],
    accent: "CONTENT / COMMUNITY / CULTURE",
  },

  "creative-production": {
    n: "03",
    title: "CREATIVE PRODUCTION",
    intro:
      "Create visual work that earns attention, from campaign concepts and photography to social-first video and brand content.",
    bullets: [
      "Photography",
      "Video Production",
      "Reels",
      "Campaign Creative",
      "Brand Content",
      "Post Production",
    ],
    accent: "PHOTO / VIDEO / CAMPAIGNS",
  },

  "web-conversion": {
    n: "04",
    title: "WEB & CONVERSION",
    intro:
      "Design digital experiences that make the next action obvious — websites, landing pages, CRO and analytics working together.",
    bullets: [
      "Web Design",
      "Landing Pages",
      "CRO",
      "Analytics",
      "UX Strategy",
      "Conversion Journeys",
    ],
    accent: "WEB / UX / CONVERSION",
  },
} as const;

type Slug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as Slug];

  if (!service) {
    return {
      title: "Services — ClickRise Productions",
      description:
        "Explore ClickRise Productions services across strategy, creative, performance and digital growth.",
    };
  }

  return {
    title: `${service.title} — ClickRise Productions`,

    description: service.intro,

    keywords: [
      "ClickRise Productions",
      service.title,
      "digital marketing agency",
      "digital marketing agency Noida",
      "digital marketing agency Delhi NCR",
      "marketing agency India",
      "performance marketing",
      "social media marketing",
      "creative agency",
      "web design agency",
    ],

    alternates: {
      canonical: `https://www.clickrise.in/services/${slug}`,
    },

    openGraph: {
      title: `${service.title} — ClickRise Productions`,
      description: service.intro,
      url: `https://www.clickrise.in/services/${slug}`,
      siteName: "ClickRise Productions",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: "/hero-reel-poster.svg",
          width: 1200,
          height: 630,
          alt: `${service.title} — ClickRise Productions`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} — ClickRise Productions`,
      description: service.intro,
      images: ["/hero-reel-poster.svg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as Slug];

  /*
   * 404
   */
  if (!service) {
    return (
      <>
        <main className="service-page">
          <div className="container">
            <nav className="service-page-nav">
              <Link href="/" className="service-logo">
                <Image
                  src="/clickrise-logo.png"
                  alt="ClickRise Productions"
                  width={190}
                  height={60}
                  priority
                />
              </Link>

              <div className="service-nav-links">
                <Link href="/services">ALL SERVICES</Link>

                <Link href="/#contact">
                  LET&apos;S MAKE IT RISE ↗
                </Link>
              </div>
            </nav>

            <section className="service-hero service-404">
              <div className="service-index">
                404 / CLICKRISE SERVICES
              </div>

              <h1>
                SERVICE
                <br />
                NOT FOUND.
              </h1>

              <div className="service-hero-bottom">
                <p>
                  The service you&apos;re looking for doesn&apos;t exist or
                  has moved.
                </p>

                <Link href="/services">
                  BACK TO SERVICES ↗
                </Link>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="service-page">

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav className="service-page-nav container">

          <Link
            href="/"
            className="service-logo"
            aria-label="ClickRise home"
          >
            <Image
              src="/clickrise-logo.png"
              alt="ClickRise Productions"
              width={190}
              height={60}
              priority
            />
          </Link>

          <div className="service-nav-links">

            <Link href="/services">
              ALL SERVICES
            </Link>

            <Link href="/#contact">
              LET&apos;S MAKE IT RISE ↗
            </Link>

          </div>

        </nav>


        {/* =========================================
            HERO
        ========================================= */}

        <section className="service-hero container">

          <div className="service-index">
            {service.n} / CLICKRISE SERVICES
          </div>

          <div className="service-kicker">
            {service.accent}
          </div>

          <h1>
            {service.title}
          </h1>

          <div className="service-hero-bottom">

            <p>
              {service.intro}
            </p>

            <Link href="/#contact">
              LET&apos;S MAKE IT RISE ↘
            </Link>

          </div>

        </section>


        {/* =========================================
            CAPABILITIES
        ========================================= */}

        <section className="service-capabilities">

          <div className="container">

            <div className="service-cap-grid">

              <div className="service-cap-heading">

                <span>
                  WHAT&apos;S INCLUDED
                </span>

                <h2>
                  BUILT FOR
                  <br />
                  <em>THE NEXT MOVE.</em>
                </h2>

              </div>


              <div className="service-bullets">

                {service.bullets.map(
                  (bullet, index) => (
                    <div
                      key={bullet}
                      className="service-bullet"
                    >

                      <small>
                        {String(index + 1).padStart(2, "0")}
                      </small>

                      <strong>
                        {bullet}
                      </strong>

                      <i>
                        ↗
                      </i>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            APPROACH
        ========================================= */}

        <section className="service-approach">

          <div className="container">

            <span>
              THE APPROACH
            </span>

            <div className="approach-grid">

              <h2>
                STRATEGY
                <br />
                → CREATIVE
                <br />
                → <em>GROWTH.</em>
              </h2>

              <p>
                ClickRise connects the service to the wider customer
                journey. The goal isn&apos;t more activity. It&apos;s a
                clearer path from attention to action, then from action to
                repeatable growth.
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section
          className="service-cta"
          id="enquire"
        >

          <div className="container">

            <span>
              READY WHEN YOU ARE
            </span>

            <h2>
              LET&apos;S MAKE
              <br />
              <em>IT RISE.</em>
            </h2>


            <div className="service-cta-actions">

              {/* MAIN CONTACT FORM */}
              <Link
                href="/#contact"
                className="service-main-cta"
              >
                LET&apos;S MAKE IT RISE
                <span>↗</span>
              </Link>


              {/* WHATSAPP */}
              <a
                href={`https://wa.me/91${PHONE}`}
                target="_blank"
                rel="noreferrer"
              >
                WHATSAPP ↗
              </a>


              {/* PHONE */}
              <a
                href={`tel:+91${PHONE}`}
              >
                CALL +91 {PHONE}
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================
          SHARED FOOTER
      ========================================= */}

      <Footer />
    </>
  );
}