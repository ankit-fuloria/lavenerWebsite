# Lavener Holdings website

Next.js App Router, TypeScript, React and custom responsive CSS.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Content

Company and service information lives in `lib/content.ts`. The homepage is `app/page.tsx`; service detail routes are generated from the service data. Brand images are local files in `public/` extracted from the supplied Lavener card artwork.

Service topics and the planning/development/deployment sequence were adapted from https://www.nprservices.in/ on 29 September 2026. The wording is rewritten for Lavener. NPR client counts, team size, history, testimonials and client projects are not attributed to Lavener. School Setu and Lavener identity/contact details come from the user's previous materials. Dashboard artwork is illustrative rather than a screenshot of a delivered product.

## Enquiries

The enquiry form validates input and prepares a mailto draft. The visitor reviews and sends the message in their own email app. No submission is stored and no email is automatically sent. Call, email and WhatsApp links use Lavener contacts. To add server-side sending later, connect an email provider and store credentials in environment variables.

The website has not been published. A final business review of services and contact information is recommended before publishing.

## School Setu product content

The School Setu page and homepage feature overview use the user-supplied Schoolo ERP brochure from `/Users/ankitfuloria/Desktop/Code/Flutter-Project/schooloFlutter/Schoolo_ERP_Brochure.pdf`. The user identified this brochure as the School Setu product reference; public copy uses School Setu branding. The original PDF is not modified or published.

`lib/school-setu.ts` contains module details, role-specific portals, and document-format availability. Only fee-slip PDF printing is marked available. Report-card, student ID-card, salary-slip and custom-template printing remain planned. Payment modes describe recording collections, not an online payment-gateway integration. Transport describes route records, not live vehicle tracking. Brochure descriptions inform the content; the illustrative dashboard remains labelled as a preview. Setup and support terms retain the previously agreed maintenance start on receipt of the advance.
# lavenerWebsite
# lavenerWebsite
