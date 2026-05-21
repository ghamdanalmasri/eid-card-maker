"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState(
    "يسرني أن أتقدم إليكم بأحر التهاني والتبريكات بمناسبة عيد الأضحى المبارك"
  );

  const [template, setTemplate] = useState(1);

  const cardRef = useRef();

  const templates = {
    1: {
      bg:"linear-gradient(135deg,#0f172a,#0f766e)",
      title:"🌙 عيد أضحى مبارك"
    },
    2: {
      bg:"linear-gradient(135deg,#7c2d12,#f59e0b)",
      title:"✨ كل عام وأنتم بخير"
    },
    3: {
      bg:"linear-gradient(135deg,#312e81,#9333ea)",
      title:"🕌 تقبل الله طاعاتكم"
    }
  };

  async function downloadPNG(){

    const html2canvas=(await import("html2canvas")).default;

    const canvas=await html2canvas(cardRef.current);

    const link=document.createElement("a");

    link.download="eid-card.png";

    link.href=canvas.toDataURL();

    link.click();
  }

  return (

<main
style={{
minHeight:"100vh",
padding:"20px",
direction:"rtl",
background:"#111827",
color:"white"
}}
>

<h1 style={{textAlign:"center"}}>
منصة بطاقات عيد الأضحى
</h1>

<div
style={{
display:"flex",
gap:"10px",
overflow:"auto",
margin:"20px 0"
}}
>

<button onClick={()=>setTemplate(1)}>
قالب 1
</button>

<button onClick={()=>setTemplate(2)}>
قالب 2
</button>

<button onClick={()=>setTemplate(3)}>
قالب 3
</button>

</div>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="التهنئة"
style={{
width:"100%",
padding:"12px",
marginBottom:"10px"
}}
/>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="الاسم"
style={{
width:"100%",
padding:"12px",
marginBottom:"20px"
}}
/>

<div
ref={cardRef}
style={{
background:templates[template].bg,
padding:"40px",
borderRadius:"25px",
textAlign:"center"
}}
>

<h2>
{templates[template].title}
</h2>

<p>
{message}
</p>

<h3>
{name}
</h3>
</div>

<br/>

<button
onClick={downloadPNG}
style={{
width:"100%",
padding:"15px",
borderRadius:"15px",
border:"none",
fontSize:"16px"
}}
>
⬇ تنزيل PNG
</button>

</main>

  );
  }
