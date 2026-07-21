import { Star } from "lucide-react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";


const testimonials = [
  {
    name: "Michael Schneider",
    role: "Geschäftsführer, Hamburg",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text:
      "Seit über zwei Jahren arbeiten wir mit dem Team zusammen. Die Reinigung ist immer zuverlässig und professionell.",
  },

  {
    name: "Anna Müller",
    role: "Praxisinhaberin",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text:
      "Sehr freundlicher Service, flexible Termine und ein perfektes Ergebnis. Absolute Empfehlung.",
  },

  {
    name: "Thomas Weber",
    role:
      "Immobilienverwaltung",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text:
      "Unsere Objekte sehen dank der regelmäßigen Reinigung immer gepflegt aus.",
  },
];


export default function Testimonials() {

  return (

    <section>

      <SectionHeading
        eyebrow="Kundenstimmen"
        title="Was unsere Kunden sagen"
        description="Vertrauen entsteht durch konstante Qualität und zuverlässigen Service."
      />


      <div
        className="
        grid gap-6
        lg:grid-cols-3
        "
      >

        {testimonials.map((item,index)=>(

          <motion.article

            key={item.name}

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

            transition={{
              delay:index*.1
            }}

            className="
            rounded-3xl
            bg-white
            p-8
            shadow-premium
            border
            border-slate-100
            "
          >


            <div
              className="
              flex gap-1
              "
            >

              {Array.from({
                length:5
              }).map((_,i)=>(

                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  className="text-yellow-400"
                />

              ))}

            </div>



            <p
              className="
              mt-6
              leading-relaxed
              text-slate-600
              "
            >
              “{item.text}”
            </p>



            <div
              className="
              mt-8
              flex items-center gap-4
              "
            >

              <img
                src={`${item.image}?auto=format&fit=crop&w=200&q=80`}
                alt={item.name}
                width={56}
                height={56}
                className="
                h-14
                w-14
                rounded-full
                object-cover
                "
              />


              <div>

                <h3
                  className="
                  font-semibold
                  text-slate-900
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  {item.role}
                </p>

              </div>


            </div>


          </motion.article>

        ))}


      </div>


    </section>

  );

}