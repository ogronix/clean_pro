"use client";

import {
  ArrowRight
} from "lucide-react";

import {
  motion
} from "framer-motion";


export default function CTA(){

return (

<section>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
relative
overflow-hidden
rounded-[40px]
bg-gradient-to-br
from-blue-600
to-blue-500
px-8
py-16
text-center
md:px-16
"

>


<div
className="
absolute
right-0
top-0
h-80
w-80
rounded-full
bg-white/10
blur-3xl
"
/>



<div
className="
relative
z-10
mx-auto
max-w-3xl
"
>

<h2
className="
text-4xl
font-bold
tracking-tight
text-white
md:text-5xl
"
>

Kostenloses Angebot
innerhalb von 24 Stunden

</h2>


<p
className="
mt-6
text-lg
text-blue-100
"
>
Kontaktieren Sie uns und erhalten Sie eine individuelle Beratung.
</p>


<a

href="#"

className="
mt-10
inline-flex
items-center
gap-2
rounded-2xl
bg-white
px-8
py-4
font-semibold
text-blue-600
shadow-xl
transition
hover:-translate-y-1
"

>

Angebot anfragen

<ArrowRight size={18}/>

</a>


</div>


</motion.div>


</section>

);

}