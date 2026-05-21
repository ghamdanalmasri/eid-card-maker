"use client";

export default function EidCard({

selectedTemplate,
message,
name,
image

}){

return(

<div
className="card"
style={{

background:selectedTemplate.bg

}}
>

<div className="moon">
🌙
</div>

<div className="lantern l1">
🏮
</div>

<div className="lantern l2">
🏮
</div>

<h1 className="title">

عيد أضحى مبارك

</h1>

{

image &&

<img
src={image}
className="user-image"
/>

}

<p className="message">

{message}

</p>

<h2 className="username">

{name}

</h2>

</div>

)

}
