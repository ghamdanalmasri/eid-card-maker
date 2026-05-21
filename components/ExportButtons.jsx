"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportButtons({

cardRef

}){

async function png(){

const canvas=
await html2canvas(
cardRef.current
);

const a=
document.createElement("a");

a.href=
canvas.toDataURL();

a.download=
"eid-card.png";

a.click();

}

async function pdf(){

const canvas=
await html2canvas(
cardRef.current
);

const img=
canvas.toDataURL();

const pdf=
new jsPDF();

pdf.addImage(
img,
"PNG",
10,
10,
180,
240
);

pdf.save(
"eid-card.pdf"
);

}

return(

<div className="buttons">

<button onClick={png}>

PNG تحميل

</button>

<button onClick={pdf}>

PDF تحميل

</button>

</div>

)

}
