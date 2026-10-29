import type { Certificate } from "./types";

// Images live in /public/certificates. Width and height are the image's real
// pixel size, so the lightbox can show it at the right shape.
export const certificates: Certificate[] = [
  {
    title: "Let's Learn & Hack: Web Development Bootcamp",
    issuer: "bongoDev",
    category: "Bootcamp",
    detail:
      "Completed a two-week web development bootcamp. Certificate of appreciation.",
    image: "/certificates/bongodev-web-bootcamp.jpg",
    width: 792,
    height: 555,
  },
  {
    title: "Mastering the Microsoft Learn Student Ambassadors Program",
    issuer: "Microsoft Learn Student Ambassadors, VU Chapter",
    category: "Bootcamp",
    detail:
      "A 3-day online bootcamp covering LinkedIn, Microsoft Copilot, Azure and Microsoft 365.",
    image: "/certificates/microsoft-learn-student-ambassador.jpg",
    width: 808,
    height: 626,
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    category: "Course",
    date: "Nov 2025",
    detail: "A 4-hour course on filtering, aggregating and sorting data in SQL.",
    credentialId: "#44,346,505",
    image: "/certificates/datacamp-intermediate-sql.jpg",
    width: 806,
    height: 474,
  },
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    category: "Course",
    date: "Nov 2025",
    detail: "A 2-hour course on relational databases and writing SQL queries.",
    credentialId: "#44,341,110",
    image: "/certificates/datacamp-intro-to-sql.jpg",
    width: 809,
    height: 474,
  },
  {
    title: "bdapps Workshop 2025",
    issuer: "bdapps, National Appstore of Bangladesh (Robi Axiata)",
    category: "Workshop",
    date: "2025",
    detail: "Certificate of participation in bdapps Workshop 2025.",
    image: "/certificates/bdapps-workshop-2025.jpg",
    width: 813,
    height: 582,
  },
  {
    title: "Certificate of Authorship: NICSDG-2026",
    issuer: "Metropolitan University Research Society (MURS)",
    category: "Research",
    date: "Jul 2026",
    detail:
      "For presenting and authoring a research paper at the National Interdisciplinary Conference on Sustainable Development Goals.",
    credentialId: "No. 559/2026",
    image: "/certificates/nicsdg-2026-authorship.jpg",
    width: 803,
    height: 559,
  },
];
