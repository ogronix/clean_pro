import { motion } from "framer-motion";

import {
  Sparkles,
} from "lucide-react";

import SectionHeading from "./section-heading";


const comparisons = [
  {
    title:
      "Büroreinigung",

    before:
      "/images/buro_before.png",

    after:
      "/images/buro_after.png",
  },

  {
    title:
      "Gewerbefläche",

    before:
      "/images/gewerbe_before.png",

    after:
      "/images/gewerbe_after.png",
  },
];


export default function BeforeAfter() {

  return (

    <section>


      <SectionHeading

        eyebrow="Vorher & Nachher"

        title="Der Unterschied ist sichtbar"

        description="Professionelle Reinigung verwandelt Räume und schafft eine hochwertige Atmosphäre."

      />



      <div
        className="
        grid gap-8
        lg:grid-cols-2
        "
      >

        {comparisons.map((item, index) => (

          <motion.div

            key={item.title}

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              delay: index * .1
            }}

            className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-100
            bg-white
            shadow-premium
            "

          >


            <div
              className="
              grid
              grid-cols-2
              "
            >

              <div
                className="
                relative
                h-72
                "
              >

                <img
                  src={item.before}
                  alt={`${item.title} vorher`}
                  className="h-full w-full object-cover"
                />

              </div>




              <div
                className="
                relative
                h-72
                "
              >

                <img
                  src={item.after}
                  alt={`${item.title} nachher`}
                  className="h-full w-full object-cover"
                />

              </div>


            </div>



            <div
              className="
              flex
              items-center
              justify-between
              p-6
              "
            >

              <div>

                <h3
                  className="
                  text-xl
                  font-bold
                  text-slate-900
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                  mt-2
                  text-sm
                  text-slate-600
                  "
                >
                  Professioneller Unterschied durch Qualität.
                </p>

              </div>



              <div
                className="
                flex h-12 w-12
                items-center justify-center
                rounded-2xl
                bg-blue-50
                text-blue-600
                "
              >

                <Sparkles />

              </div>


            </div>


          </motion.div>

        ))}


      </div>


    </section>

  );
}