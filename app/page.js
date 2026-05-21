"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(
    "يسرني أن أتقدم إليكم بأحر التهاني والتبريكات بمناسبة عيد الأضحى المبارك"
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        direction: "rtl",
        fontFamily: "Tahoma",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#0f766e)",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        ✨ منصة بطاقات عيد الأضحى
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب التهنئة"
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            fontSize: "15px",
          }}
        />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اكتب الاسم"
          style={{
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            fontSize: "15px",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "35px",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow:
            "0 8px 30px rgba(0,0,0,.35)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "-10px",
            fontSize: "90px",
            opacity: .25
          }}
        >
          🌙
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            fontSize: "50px",
            opacity: .2
          }}
        >
          ✨
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "20px"
          }}
        >
          عيد أضحى مبارك
        </h2>

        <p
          style={{
            textAlign: "center",
            lineHeight: "2",
            fontSize: "18px"
          }}
        >
          {message}
        </p>

        <h3
          style={{
            textAlign: "center",
            marginTop: "25px",
            fontSize: "25px",
            color: "#fde68a"
          }}
        >
          {name}
        </h3>
      </div>
    </main>
  );
              }
