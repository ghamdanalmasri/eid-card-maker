export default function Sidebar({

name,
setName,

message,
setMessage,

fontSize,
setFontSize,

upload

}){

return(

<div className="sidebar">

<h2>

منصة بطاقات العيد

</h2>

<input
placeholder="اسمك"
value={name}
onChange={(e)=>
setName(e.target.value)
}
/>

<textarea
placeholder="التهنئة"
value={message}
onChange={(e)=>
setMessage(e.target.value)
}
/>

<label>

حجم الخط

</label>

<input
type="range"
min="18"
max="50"
value={fontSize}
onChange={(e)=>
setFontSize(e.target.value)
}
/>

<input
type="file"
accept="image/*"
onChange={upload}
/>

</div>

)

}
