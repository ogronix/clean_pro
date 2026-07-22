import { motion } from "framer-motion";

import SectionHeading from "./section-heading";


const images = [
  {
    src:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    alt:
      "Professionelle Reinigung",
  },

  {
    src:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
    alt:
      "Sauberes Büro",
  },

  {
    src:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba",
    alt:
      "Reinigungsteam",
  },

  {
    src:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473",
    alt:
      "Fensterreinigung",
  },

  {
    src:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    alt:
      "Moderne Arbeitsfläche",
  },

  {
    src:
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f",
    alt:
      "Professionelle Reinigung",
  },
];


export default function Gallery() {
  return (
    <section>

      <SectionHeading
        eyebrow="Referenzen"
        title="Einblicke in unsere Arbeit"
        description="Saubere Räume schaffen Vertrauen. Sehen Sie einige unserer Projekte."
      />


      <div
        className="
        columns-1
        gap-6
        md:columns-2
        lg:columns-3
        "
      >

        {images.map((image,index)=>(

          <motion.div

            key={image.src}

            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              delay:index*.08,
            }}

            className="
            group
            mb-6
            overflow-hidden
            rounded-3xl
            "
          >

            <img
              src={`${image.src}?auto=format&fit=crop&w=900&q=80`}
              alt={image.alt}
              width={900}
              height={1200}
              loading="lazy"
              className="
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

          </motion.div>

        ))}


      </div>


    </section>
  );
}