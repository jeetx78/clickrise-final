"use client";

import { useEffect, useState } from "react";

const services = [
  "Performance Marketing",
  "Social Media",
  "Creative Production",
  "Web & Conversion",
  "Something else",
];

export default function EnquiryModal({
  service = "",
}: {
  service?: string;
}) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          need: form.get("need"),
          message: form.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send enquiry.");
      }

      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className="rise-button"
        onClick={() => {
          setSent(false);
          setError("");
          setOpen(true);
        }}
      >
        LET&apos;S MAKE IT RISE <span>↗</span>
      </button>

      {open && (
        <div
          className="enquiry-modal"
          role="dialog"
          aria-modal="true"
          aria-label="ClickRise enquiry form"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="enquiry-panel">
            <button
              className="enquiry-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close enquiry form"
            >
              ×
            </button>

            {!sent ? (
              <>
                <div className="eyebrow">START A CONVERSATION</div>

                <h2>
                  LET&apos;S MAKE
                  <br />
                  <em>IT RISE.</em>
                </h2>

                <p className="enquiry-intro">
                  Tell us what you&apos;re building, where you&apos;re stuck,
                  or where you want to go next.
                </p>

                <form onSubmit={submit} className="enquiry-form">
                  <label>
                    YOUR NAME
                    <input required name="name" placeholder="Your name" />
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
                    <input name="phone" placeholder="+91" />
                  </label>

                  <label>
                    WHAT DO YOU NEED?
                    <select name="need" defaultValue={service}>
                      <option value="" disabled>
                        Select one
                      </option>

                      {services.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="full">
                    TELL US ABOUT IT
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="A little context goes a long way..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="enquiry-submit"
                    disabled={sending}
                  >
                    {sending ? "SENDING..." : "SEND ENQUIRY"} <span>↗</span>
                  </button>
                </form>

                {error && <p className="form-error">{error}</p>}
              </>
            ) : (
              <div className="enquiry-success">
                <div className="success-glyph">✓</div>
                <div className="eyebrow">MESSAGE RECEIVED</div>
                <h2>
                  WE&apos;LL MAKE
                  <br />
                  <em>IT MOVE.</em>
                </h2>
                <p>
                  Thanks. Your enquiry has been sent to the ClickRise team.
                </p>
                <button
                  className="enquiry-submit"
                  onClick={() => setOpen(false)}
                >
                  CLOSE <span>×</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}