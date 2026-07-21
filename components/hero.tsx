"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Phone,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
} from "lucide-react";


const benefits = [
    "Versichert",
    "Faire Preise",
    "100% Zufriedenheit",
];


export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 lg:pt-40">

            <div className="absolute inset-0">

                <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                    alt="Professionelle Gebäudereinigung Hamburg"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />


                <div
                    className="
          absolute inset-0
          bg-gradient-to-r
          from-slate-950/90
          via-slate-950/75
          to-slate-950/50
          "
                />

            </div>



            <div
                className="
        container-premium
        relative z-10
        "
            >

                <div
                    className="
          grid min-h-[760px]
          items-center
          gap-16
          lg:grid-cols-2
          "
                >


                    {/* LEFT */}

                    <div style={{minWidth:"100%"}}>


                        <motion.div

                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                duration: .6
                            }}

                            className="
              mb-8 inline-flex
              items-center gap-2
              rounded-full
              border border-white/20
              bg-white/10
              px-4 py-2
              backdrop-blur-xl
              "

                        >

                            <Sparkles
                                className="text-blue-400"
                                size={18}
                            />

                            <span
                                className="
                text-sm
                text-white
                "
                            >
                                Premium Reinigung Hamburg
                            </span>


                        </motion.div>



                        <motion.h1

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                duration: .7
                            }}

                            className="
              text-5xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              md:text-6xl
              lg:text-7xl
              "

                        >

                            Professionelle

                            <span
                                className="
                block
                bg-gradient-to-r
                from-blue-400
                to-white
                bg-clip-text
                text-transparent
                "
                            >
                                Gebäudereinigung
                            </span>

                            in Hamburg


                        </motion.h1>



                        <motion.p

                            initial={{
                                opacity: 0,
                                y: 25
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: .2
                            }}

                            className="
              mt-8
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-300
              "

                        >

                            Zuverlässig.
                            Professionell.
                            Faire Preise.

                            <br />

                            Wir reinigen Büros,
                            Gewerbeflächen und private
                            Immobilien mit höchsten
                            Qualitätsstandards.

                        </motion.p>




                        <motion.div

                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: .3
                            }}

                            className="
              mt-10
              flex flex-col gap-4
              sm:flex-row
              "

                        >

                            <a
                                href="#kontakt"
                                className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-7 py-4
                font-semibold
                text-white
                shadow-xl
                shadow-blue-600/30
                transition
                hover:-translate-y-1
                "
                            >

                                Kostenloses Angebot

                                <ArrowRight
                                    size={18}
                                    className="
                  transition
                  group-hover:translate-x-1
                  "
                                />

                            </a>



                            <a
                                href="tel:+494012345678"
                                className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-7 py-4
                font-semibold
                text-white
                backdrop-blur-xl
                "
                            >

                                <Phone size={18} />

                                Jetzt anrufen

                            </a>


                        </motion.div>




                        <div
                            className="
              mt-10
              flex flex-wrap gap-3
              "
                        >

                            {benefits.map(item => (

                                <div
                                    key={item}
                                    className="
                  flex items-center gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4 py-2
                  "
                                >

                                    <CheckCircle2
                                        size={15}
                                        className="text-blue-400"
                                    />

                                    <span
                                        className="
                    text-sm
                    text-white
                    "
                                    >
                                        {item}
                                    </span>

                                </div>

                            ))}


                        </div>


                    </div>






                    {/* RIGHT CARD */}


                    <motion.div

                        initial={{
                            opacity: 0,
                            x: 40
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        transition={{
                            duration: .8
                        }}

                        className="
            hidden
            lg:block
            "

                    >

                        <div
                            className="
              rounded-[32px]
              border
              border-white/20
              bg-white/10
              p-5
              backdrop-blur-xl
              shadow-2xl
              "
                        >


                            <div
                                className="
                overflow-hidden
                rounded-3xl
                "
                            >

                                <Image

                                    src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba"

                                    alt="Reinigungsteam"

                                    width={700}

                                    height={900}

                                    className="
                  h-[500px]
                  w-full
                  object-cover
                  "
                                />

                            </div>




                            <div
                                className="
                mt-5
                rounded-3xl
                bg-white/10
                p-5
                "
                            >

                                <div
                                    className="
                  flex items-center gap-3
                  "
                                >

                                    <div
                                        className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    bg-blue-600
                    "
                                    >

                                        <ShieldCheck
                                            className="text-white"
                                        />

                                    </div>


                                    <div>

                                        <p
                                            className="
                      font-semibold
                      text-white
                      "
                                        >
                                            Zertifizierter Service
                                        </p>

                                        <p
                                            className="
                      text-sm
                      text-slate-300
                      "
                                        >
                                            Zuverlässig & versichert
                                        </p>

                                    </div>


                                </div>

                            </div>


                        </div>


                    </motion.div>


                </div>

            </div>


        </section>
    );
}