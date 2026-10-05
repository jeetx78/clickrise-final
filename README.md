# ClickRise Productions

Next.js website for ClickRise Productions.

## V3 updates
- Portrait reel video in the hero (`public/hero-reel.mp4`). Replace it with the real ClickRise reel when ready.
- Services dropdown in the navbar.
- Individual service pages:
  - `/services/performance-marketing`
  - `/services/social-media`
  - `/services/creative-production`
  - `/services/web-conversion`
- Phone + WhatsApp: **+91 9354588129**.
- Enquiry form posts to `/api/enquiry`.
- Email delivery uses Resend.

## Email setup
Copy `.env.example` to `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=hello@clickrise.in
CONTACT_FROM_EMAIL=ClickRise Website <onboarding@resend.dev>
```

For production, use a verified sender address/domain in Resend for `CONTACT_FROM_EMAIL`.

## Run

```bash
npm install
npm run dev
```
