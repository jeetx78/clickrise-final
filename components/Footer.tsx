import Image from "next/image";
import Link from "next/link";

const PHONE = "9354588129";
const EMAIL = "hello@clickrise.in";
const WA = `https://wa.me/91${PHONE}`;

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-shell">
        {/* TOP */}
        <div className="container footer-top">
          <div className="footer-brand-block">
            <div className="footer-logo-wrap">
              <Image
                src="/clickrise-logo-white.png"
                alt="ClickRise Productions"
                width={250}
                height={80}
                className="footer-logo"
              />

              {/* Orange trademark cursor */}
              <Image
                src="/cursor-favicon.png"
                alt=""
                width={48}
                height={48}
                className="footer-logo-cursor"
                aria-hidden="true"
              />
            </div>

            <p>
              Strategy, creative and digital growth for brands ready to move.
            </p>
          </div>

          <div className="footer-columns">
            {/* EXPLORE */}
            <div className="footer-column">
              <span>EXPLORE</span>

              <Link href="/#services">Services</Link>
              <Link href="/#results">Results</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>

            {/* CONNECT */}
            <div className="footer-column">
              <span>CONNECT</span>

              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>

              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

              <a href={`tel:+91${PHONE}`}>
                +91 {PHONE}
              </a>
            </div>

            {/* LOCATION */}
            <div className="footer-column">
              <span>BASED IN</span>

              <p>
                Delhi NCR
                <br />
                India
              </p>

              <p>
                MON — FRI
                <br />
                10:00 — 18:00
              </p>
            </div>
          </div>
        </div>

        {/* LARGE 21ST.DEV-STYLE WORDMARK */}
        <div className="footer-wordmark" aria-label="ClickRise">
          <div className="footer-wordmark-track">
            <span>CLICKRISE</span>
            <span>CLICKRISE</span>
            <span>CLICKRISE</span>
          </div>

          <div className="footer-glyph" aria-hidden="true">
            <span className="glyph-cursor">↗</span>
            <span className="glyph-ring" />
            <span className="glyph-ring glyph-ring-two" />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="container footer-bottom">
          <span>© 2026 CLICKRISE PRODUCTIONS</span>

          <div>
            <Link href="/#top">BACK TO TOP ↑</Link>

            <Link href="/services">SERVICES ↗</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-logo-wrap {
          position: relative;
          width: 250px;
          display: inline-block;
        }

        .footer-logo {
          width: 250px;
          height: auto;
          display: block;
        }

        .footer-logo-cursor {
          position: absolute;
          width: 42px;
          height: 42px;
          object-fit: contain;
          right: 27px;
          top: -7px;
          z-index: 3;
          filter: drop-shadow(0 0 9px rgba(255, 90, 31, .35));
          animation: clickriseFooterCursor 3.2s ease-in-out infinite;
        }

        .footer-logo-wrap:hover .footer-logo-cursor {
          animation-duration: .65s;
        }

        @keyframes clickriseFooterCursor {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }

          50% {
            transform: translate3d(0, -5px, 0) rotate(4deg);
          }
        }

        .footer-wordmark {
          position: relative;
          overflow: hidden;
          margin-top: 100px;
          padding: 40px 0 20px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .footer-wordmark-track {
          display: flex;
          width: max-content;
          gap: 4vw;
          animation: clickriseFooterMarquee 22s linear infinite;
          will-change: transform;
        }

        .footer-wordmark-track span {
          flex: none;
          font-family: Manrope, sans-serif;
          font-size: clamp(120px, 20vw, 330px);
          line-height: .68;
          font-weight: 800;
          letter-spacing: -.105em;
          color: #fff;
          white-space: nowrap;
          user-select: none;
        }

        @keyframes clickriseFooterMarquee {
          from {
            transform: translate3d(0,0,0);
          }

          to {
            transform: translate3d(-33.333%,0,0);
          }
        }

        .footer-glyph {
          position: absolute;
          z-index: 5;
          right: clamp(25px, 7vw, 110px);
          top: 50%;
          width: clamp(95px, 11vw, 170px);
          aspect-ratio: 1;
          transform: translateY(-50%);
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ff5a1f;
          box-shadow:
            0 0 0 1px rgba(255,255,255,.15),
            0 0 70px rgba(255,90,31,.22);
          transition:
            transform .6s cubic-bezier(.22,1,.36,1),
            box-shadow .6s;
        }

        .footer-glyph:hover {
          transform: translateY(-50%) rotate(14deg) scale(1.08);
          box-shadow:
            0 0 0 1px rgba(255,255,255,.3),
            0 0 100px rgba(255,90,31,.4);
        }

        .glyph-cursor {
          position: relative;
          z-index: 4;
          color: #090909;
          font-family: Arial, sans-serif;
          font-size: clamp(30px, 4vw, 62px);
          font-weight: 300;
          transform: translate(2px,-2px);
        }

        .glyph-ring {
          position: absolute;
          inset: 12%;
          border: 1px solid rgba(9,9,9,.3);
          border-radius: 50%;
          animation: clickriseGlyphSpin 9s linear infinite;
        }

        .glyph-ring-two {
          inset: 23%;
          border-color: rgba(9,9,9,.18);
          animation-duration: 6s;
          animation-direction: reverse;
        }

        @keyframes clickriseGlyphSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          padding-top: 28px;
          padding-bottom: 28px;
          color: rgba(255,255,255,.45);
          font: 500 9px/1 "DM Mono", monospace;
          letter-spacing: .12em;
        }

        .footer-bottom > div {
          display: flex;
          gap: 28px;
        }

        .footer-bottom a {
          color: rgba(255,255,255,.65);
          transition: color .25s;
        }

        .footer-bottom a:hover {
          color: #ff5a1f;
        }

        @media(max-width: 700px) {
          .footer-logo-wrap,
          .footer-logo {
            width: 210px;
          }

          .footer-logo-cursor {
            width: 35px;
            height: 35px;
            right: 23px;
            top: -5px;
          }

          .footer-wordmark {
            margin-top: 70px;
          }

          .footer-glyph {
            right: 20px;
            width: 85px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer-bottom > div {
            flex-wrap: wrap;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .footer-logo-cursor,
          .footer-wordmark-track,
          .glyph-ring {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
}