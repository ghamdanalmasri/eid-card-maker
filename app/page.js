"use client";

import {useState,useRef} from "react";

import Sidebar from "../components/Sidebar";

import CardCanvas from "../components/CardCanvas";

import ExportButtons from "../components/ExportButtons";

import {templates}
from "../lib/templates";

export default function Home(){

const cardRef=
useRef();

const [name,setName]=
useState("");

const [message,setMessage]=
useState("يسرني أن أتقدم إليكم بأحر التهاني");

const [fontSize,setFontSize]=
useState(28);

const [image,setImage]=
useState(null);

const [template]=
useState(
templates[0]
);

function upload(e){

const file=
e.target.files[0];

const reader=
new FileReader();

reader.onload=()=>{

setImage(
reader.result
)

};

reader.readAsDataURL(
file
);

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

upload={upload}

/>

<div>

<div ref={cardRef}>

<CardCanvas

template={template}

name={name}

message={message}

fontSize={fontSize}

image={image}

/>

</div>

<ExportButtons
cardRef={cardRef}
/>

</div>

</div>

)

}
