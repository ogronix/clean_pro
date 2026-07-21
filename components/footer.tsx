import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";


export default function Footer(){

return (

<footer
className="
bg-slate-950
text-white
"
>

<div
className="
container-premium
grid
gap-10
py-16
md:grid-cols-3
"
>


<div>

<h3
className="
text-xl
font-bold
"
>
Reinigung Hamburg
</h3>


<p
className="
mt-4
text-slate-400
"
>
Professionelle Gebäudereinigung für Unternehmen und Privatkunden.
</p>

</div>



<div>

<h4
className="
font-semibold
"
>
Kontakt
</h4>


<div
className="
mt-4
space-y-3
text-slate-400
"
>

<p className="flex gap-2">
<MapPin size={18}/>
Hamburg, Deutschland
</p>

<p className="flex gap-2">
<Phone size={18}/>
040 12345678
</p>

<p className="flex gap-2">
<Mail size={18}/>
info@reinigung-hamburg.de
</p>

</div>


</div>



<div>

<h4
className="
font-semibold
"
>
Rechtliches
</h4>


<div
className="
mt-4
space-y-3
text-slate-400
"
>

<a href="#">
Datenschutz
</a>

<a href="#">
Impressum
</a>

</div>


</div>


</div>


<div
className="
border-t
border-white/10
py-6
text-center
text-sm
text-slate-500
"
>

© {new Date().getFullYear()} Reinigung Hamburg. Alle Rechte vorbehalten.

</div>


</footer>

);

}