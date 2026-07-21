"use client";

import {
  Users,
  Clock3,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

import AnimatedCounter from "./animated-counter";
import SectionHeading from "./section-heading";


const statistics = [
  {
    value: 500,
    suffix: "+",
    label: "Zufriedene Kunden",
    icon: Users,
  },
  {
    value: 10,
    suffix: "+",
    label: "Jahre Erfahrung",
    icon: Clock3,
  },
  {
    value: 98,
    suffix: "%",
    label: "Weiterempfehlung",
    icon: ThumbsUp,
  },
  {
    value: 24,
    suffix: "h",
    label: "Antwortzeit",
    icon: MessageCircle,
  },
];


export default function Statistics() {
  return (
    <section>

      <SectionHeading
        eyebrow="Unsere Zahlen"
        title="Qualität, die überzeugt"
        description="Unsere Erfahrung zeigt sich in zufriedenen Kunden und konstant hoher Servicequalität."
      />


      <div
        className="
        grid gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >

        {statistics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: index * 0.1,
              }}

              className="
              rounded-3xl
              border
              border-slate-100
              bg-white
              p-8
              text-center
              shadow-premium
              "
            >

              <div
                className="
                mx-auto mb-6
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-blue-50
                text-blue-600
                "
              >
                <Icon size={26}/>
              </div>


              <div
                className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                "
              >
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />
              </div>


              <p
                className="
                mt-3
                text-slate-600
                "
              >
                {item.label}
              </p>


            </motion.div>
          );
        })}

      </div>

    </section>
  );
}