import { ImageResponse } from "next/og";
export const alt = "Abror Asralov — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function SocialImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#020617",
        padding: 80,
        color: "white",
      }}
    >
      <div style={{ color: "#5eead4", fontSize: 24, marginBottom: 32 }}>
        WEB APPLICATIONS / ENGINEERING TOOLS
      </div>
      <div style={{ fontSize: 76, fontWeight: 700 }}>Abror Asralov</div>
      <div style={{ fontSize: 40, color: "#cbd5e1", marginTop: 20 }}>
        Software Engineer
      </div>
      <div style={{ fontSize: 24, color: "#5eead4", marginTop: 60 }}>
        asralov.vercel.app
      </div>
    </div>,
    size,
  );
}
