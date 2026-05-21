export default function Sidebar({

name,
setName,
message,
setMessage,
fontSize,
setFontSize,
textColor,
setTextColor

}){

return(

<div className="sidebar">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="الاسم"
/>

<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<label>

حجم الخط

<input
type="range"
min="14"
max="40"
value={fontSize}
onChange={(e)=>setFontSize(e.target.value)}
/>

</label>

<input
type="color"
value={textColor}
onChange={(e)=>setTextColor(e.target.value)}
/>

</div>

)

  }
