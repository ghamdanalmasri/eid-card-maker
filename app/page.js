"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(
    "يسرني أن أتقدم إليكم بأحر التهاني والتبريكات بمناسبة عيد الأضحى المبارك"
  );

  return (
    <main style={{
      padding:20,
      fontFamily:"sans-serif",
      direction:"rtl"
    }}>

      <h1>منصة بطاقات عيد الأضحى</h1>

      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        marginBottom:"20px"
      }}>

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="اكتب التهنئة"
        />

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="اكتب الاسم"
        />

      </div>

      <div style={{
        background:"#1f2937",
        color:"white",
        padding:"30px",
        borderRadius:"15px"
      }}>

        <h2>🌙 عيد أضحى مبارك</h2>

        <p>{message}</p>

        <h3>{name}</h3>

      </div>

    </main>
  );
}
