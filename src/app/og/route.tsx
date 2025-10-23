
import { ImageResponse } from "next/og";

export const runtime = "edge";

const brandGradient = {
  backgroundImage:
    "linear-gradient(135deg, rgba(14,165,233,0.85), rgba(76,29,149,0.9))",
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          ...brandGradient,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "960px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.85)",
            }}
          >
            Rafi Mufadhal Difany
          </span>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              fontWeight: 600,
            }}
          >
            Senior Frontend Engineer & UX Writer crafting motion-rich product
            experiences.
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "rgba(226,232,240,0.85)",
              maxWidth: "820px",
            }}
          >
            Next.js | TypeScript | Tailwind CSS | shadcn/ui | Framer Motion
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "22px",
            color: "rgba(226,232,240,0.8)",
          }}
        >
          <span>rafi-portfolio.dev</span>
          <span>|</span>
          <span>@rafidev</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
