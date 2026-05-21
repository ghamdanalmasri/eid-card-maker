"use client";

import { useRef, useState } from "react";
import { Stage, Layer, Text, Image, Circle } from "react-konva";

export default function Editor(){

const stageRef=useRef();

const [name,setName]=useState("حامد");

const [message,setMessage]=useState(
"يسرني أن أتقدم إليكم بأحر التهاني"
);

const [fontSize,setFontSize]=useState(30);

const [imageObj,setImageObj]=useState(null);

const upload=(e)=>{

const file=e.target.files[0];

if(!file)return;

const reader=new FileReader();

reader.onload=()=>{

const img=new window.Image();

img.src=reader.result;

img.onload=()=>{

setImageObj(img);

};

};

reader.readAsDataURL(file);

};

const savePNG=()=>{

const uri=stageRef.current.toDataURL();

const link=document.createElement("a");

link.download="eid-card.png";

link.href=uri;

link.click();

};

return(

<div style={{
display:"flex",
gap:"20px",
padding:"20px",
direction:"rtl"
}}>

<div style={{
width:"300px",
background:"#08111d",
padding:"20px",
borderRadius:"20px",
color:"white"
}}>

<h2>لوحة التحكم</h2>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="اسمك"
/>

<br/><br/>

<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<br/><br/>

<input
type="range"
min="20"
max="60"
value={fontSize}
onChange={(e)=>setFontSize(e.target.value)}
/>

<br/><br/>

<input
type="file"
onChange={upload}
/>

<br/><br/>

<button onClick={savePNG}>
تحميل PNG
</button>

</div>

<div>

<Stage
width={800}
height={1000}
ref={stageRef}
>

<Layer>

<Text
text="🌙 عيد أضحى مبارك"
fontSize={40}
fill="#D4AF37"
x={200}
y={60}
/>

{imageObj && (

<>
<Circle
x={400}
y={280}
radius={120}
stroke="#D4AF37"
strokeWidth={6}
/>

<Image
image={imageObj}
x={280}
y={160}
width={240}
height={240}
clipFunc={(ctx)=>{

ctx.arc(
120,
120,
120,
0,
Math.PI*2
);

}}
/>
</>

)}

<Text
text={message}
fontSize={fontSize}
fill="white"
x={160}
y={500}
/>

<Text
text={name}
fontSize={45}
fill="#D4AF37"
x={330}
y={700}
/>

</Layer>

</Stage>

</div>

</div>

);

}
