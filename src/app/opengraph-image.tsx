import { ImageResponse } from "next/og";

export const alt = "Instituto Curvelo — Ciência, Tecnologia e Inovação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background:
            "linear-gradient(135deg, #042b45 0%, #063a5e 60%, #0a4a78 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#7aa8c8",
          }}
        >
          Ciência · Tecnologia · Inovação
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          Instituto Curvelo
        </div>
        <div style={{ marginTop: 32, width: 96, height: 8, background: "#1a6fa8" }} />
        <div style={{ marginTop: 32, fontSize: 36, color: "rgba(255,255,255,0.85)" }}>
          Tecnologia que inspira
        </div>
      </div>
    ),
    { ...size },
  );
}
