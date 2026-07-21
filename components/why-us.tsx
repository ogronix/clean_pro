import {
CheckCircle2,
Shield,
CalendarDays,
Leaf,
Users,
Euro
} from "lucide-react";

import {motion} from "framer-motion";

import SectionHeading from "./section-heading";


const advantages=[

{
title:"100% Zufriedenheit",
icon:CheckCircle2
},

{
title:"Versichert",
icon:Shield
},

{
title:"Flexible Termine",
icon:CalendarDays
},

{
title:"Umweltfreundlich",
icon:Leaf
},

{
title:"Erfahrenes Team",
icon:Users
},

{
title:"Faire Preise",
icon:Euro
}

];



export default function WhyUs(){

return (

<section>


<SectionHeading

eyebrow="Warum wir"

title="Ihr zuverlässiger Reinigungspartner"

description="
Qualität, Vertrauen und Erfahrung.
Darauf verlassen sich unsere Kunden täglich.
"

/>



<div
className="
grid gap-5
sm:grid-cols-2
lg:grid-cols-3
"
>

{advantages.map((item,index)=>{

const Icon=item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
delay:index*.05
}}

className="
flex items-center gap-4
rounded-3xl
bg-white
p-6
shadow-premium
border
border-slate-100
"

>

<div
className="
flex h-12 w-12
items-center justify-center
rounded-2xl
bg-blue-50
text-blue-600
"
>

<Icon/>

</div>


<p
className="
font-semibold
text-slate-900
"
>
{item.title}
</p>


</motion.div>

)

})}


</div>


</section>

)

}