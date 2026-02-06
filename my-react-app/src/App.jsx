import React, { useState } from "react";
import loveVideo from "./assets/WhatsApp Video 2026-02-06 at 16.31.47.mp4";
import img1 from "./assets/WhatsApp Image 2026-02-06 at 16.31.48.jpeg";
import img2 from "./assets/WhatsApp Image 2026-02-06 at 16.32.29.jpeg";

function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "55%", left: "55%" });

  const moveNo = () => {
    const top = Math.random() * 70 + "%";
    const left = Math.random() * 70 + "%";
    setNoPos({ top, left });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.question}>Will you be my Valentine NEHA ? 💕</h1>

      <div style={styles.btnBox}>
        <button style={styles.yes} onClick={() => setAccepted(true)}>
          YES 💖
        </button>

        {!accepted && (
          <button
            style={{ ...styles.no, top: noPos.top, left: noPos.left }}
            onMouseEnter={moveNo}
          >
            NO 😢
          </button>
        )}
      </div>

      {accepted && (
        <>
          <h2 style={styles.yayy}>YAYYYY 💕🥰</h2>

          {/* IMAGE - VIDEO - IMAGE */}
          <div style={styles.mediaRow}>
            <img src={img1} alt="left" style={styles.image} />

            <video
              src={loveVideo}
              autoPlay
              loop
              controls
              style={styles.video}
            />

            <img src={img2} alt="right" style={styles.image} />
          </div>
        </>
      )}
    </div>
  );
}

export default Valentine;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    fontFamily: "cursive",
    color: "#fff",
  },
  question: {
    fontSize: "42px",
    marginBottom: "30px",
    textAlign: "center",
  },
  btnBox: {
    position: "relative",
    width: "320px",
    height: "200px",
  },
  yes: {
    padding: "15px 40px",
    fontSize: "20px",
    borderRadius: "30px",
    border: "none",
    background: "#ff0033",
    color: "#fff",
    cursor: "pointer",
  },
  no: {
    position: "absolute",
    padding: "15px 35px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    background: "#444",
    color: "#fff",
    cursor: "pointer",
    transition: "0.2s",
  },
  yayy: {
    marginTop: "30px",
    fontSize: "36px",
  },

  /* IMAGE - VIDEO - IMAGE ROW */
  mediaRow: {
    marginTop: "13px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  video: {
    width: "540px",
    height: "360px",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  image: {
    width: "350px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },
};
