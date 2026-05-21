"use client";

import {useState} from "react";

import Sidebar from "../components/Sidebar";

import EidCard from "../components/EidCard";

import {templates} from "../components/Templates";

export default function Home(){

const [name,setName]=useState("");

const [message,setMessage]=useState(
"يسرني أن أتقدم إليكم بأحر التهاني"
);

const [fontSize,setFontSize]=useState(20);

const [textColor,setTextColor]=useState("#ffffff");

const [image,setImage]=useState(null);

const [selectedTemplate,setSelectedTemplate]=
useState(templates[0]);

function upload(e){

const file=e.target.files[0];

const reader=new FileReader();

reader.onload=()=>{

setImage(reader.result)

}

reader.readAsDataURL(file);

}

return(

<div className="container">

<Sidebar

name={name}
setName={setName}

message={message}
setMessage={setMessage}

fontSize={fontSize}
setFontSize={setFontSize}

textColor={textColor}
setTextColor={setTextColor}

/>

<div>

<input
type="file"
onChange={upload}
/>

<div>

{

templates.map((t)=>(

<button
key={t.id}
onClick={()=>
setSelectedTemplate(t)
}
>

{t.title}

</button>

))

}

</div>

<EidCard

selectedTemplate={selectedTemplate}
message={message}
name={name}
image={image}
fontSize={fontSize}
textColor={textColor}

/>

</div>

</div>

)

}
