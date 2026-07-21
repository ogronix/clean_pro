export default function JsonLd(){

const data = {

"@context":
"https://schema.org",

"@type":
"LocalBusiness",

"name":
"Reinigung Hamburg",

"description":
"Professionelle Gebäudereinigung in Hamburg.",

"areaServed":
"Hamburg",

"telephone":
"+49 40 12345678",

"address":{

"@type":
"PostalAddress",

"addressLocality":
"Hamburg",

"addressCountry":
"DE"

}

};


return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{
__html:
JSON.stringify(data)
}}

/>

);

}