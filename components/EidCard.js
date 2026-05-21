"use client";

import Draggable from "react-draggable";

export default function EidCard({

selectedTemplate,
message,
name,
image,
fontSize,
textColor

}){

return(

<div
className="card"
style={{

background:selectedTemplate.bg

}}
>

<h1>

🌙 عيد أضحى مبارك

</h1>

{

image &&

<Draggable>

<img
src={image}
className="user-image"
/>

</Draggable>

}

<p
style={{

fontSize:fontSize+"px",
color:textColor

}}
>

{message}

</p>

<h2>

{name}

</h2>

</div>

)

}
