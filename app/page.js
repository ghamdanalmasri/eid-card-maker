"use client";

import { useState, useRef } from "react";

export default function Home() {

const [name,setName]=useState("");

const [message,setMessage]=useState(
"يسرني أن أتقدم إليكم بأحر التهاني والتبريكات بمناسبة عيد الأضحى المبارك"
);

const [image,setImage]=useState(null);

const [imageSize,setImageSize]=useState(120);

const cardRef=useRef();

const handleImage=(e)=>{

const file=e.target.files[0];

if(file){

const reader=new FileReader();

reader.onload=()=>{

setImage(reader.result);

};

reader.readAsDataURL(file);

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

return(

<main
style={{
minHeight:"100vh",
padding:"20px",
background:"#111827",
color:"white",
direction:"rtl"
}}
>

<h1 style={{textAlign:"center"}}>

منصة بطاقات عيد الأضحى

</h1>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="نص التهنئة"
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
marginBottom:"10px"
}}
/>

<input
type="file"
accept="image/*"
onChange={handleImage}
style={{
marginBottom:"10px"
}}
/>

<div>

حجم الصورة

<input
type="range"
min="80"
max="250"
value={imageSize}
onChange={(e)=>setImageSize(e.target.value)}
/>

</div>

<br/>

<div
ref={cardRef}
style={{
padding:"30px",
borderRadius:"25px",
background:
"linear-gradient(135deg,#0f172a,#0f766e)",
textAlign:"center"
}}
>

<h2>

🌙 عيد أضحى مبارك

</h2>

{

image &&

<img
src={image}
style={{
width:imageSize+"px",
height:imageSize+"px",
borderRadius:"50%",
objectFit:"cover",
border:"4px solid white"
}}
/>

}

<p
style={{
lineHeight:"2"
}}
>

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
border:"none",
borderRadius:"15px"
}}
>

⬇ تنزيل PNG

</button>

</main>

)

}
