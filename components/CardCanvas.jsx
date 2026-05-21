"use client";

import {Rnd} from "react-rnd";

export default function CardCanvas({

template,
name,
message,
image,
fontSize

}){

return(

<div
className="card"
style={{
background:template.bg
}}
>

<div className="moon">

🌙

</div>

<h1>

عيد أضحى مبارك

</h1>

{
image &&

<Rnd
default={{
x:240,
y:120,
width:180,
height:180
}}
lockAspectRatio
>

<img
src={image}
className="user-image"
/>

</Rnd>

}

<div
className="message"
style={{
fontSize
}}
>

{message}

</div>

<div className="username">

{name}

</div>

</div>

)

}
