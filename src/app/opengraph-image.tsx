import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.designation}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared on LinkedIn, WhatsApp,
// Facebook and so on.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(129,140,248,0.35), transparent 45%), radial-gradient(circle at 90% 80%, rgba(56,189,248,0.3), transparent 45%), #0b1120",
          color: "#e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: 8,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #818cf8, #38bdf8)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={300}
            height={300}
            style={{
              borderRadius: 9999,
              objectFit: "cover",
              objectPosition: "50% 20%",
              border: "8px solid #0b1120",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#38bdf8" }}>{"Hi there, I'm"}</div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              backgroundImage: "linear-gradient(90deg, #818cf8, #38bdf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 8 }}>
            {site.designation}
          </div>
          <div style={{ fontSize: 24, color: "#94a3b8", marginTop: 16 }}>
            {`${site.tagline} · ${site.location}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
