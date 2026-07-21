"use client";

import {
    useState
} from "react";

import {
    Plus
} from "lucide-react";

import {
    motion,
    AnimatePresence
} from "framer-motion";

import SectionHeading from "./section-heading";


const questions = [

    {
        question:
            "Welche Reinigungsleistungen bieten Sie an?",

        answer:
            "Wir bieten Büroreinigung, Fensterreinigung, Grundreinigung, Treppenhausreinigung, Haushaltsreinigung und Bauendreinigung."
    },

    {
        question:
            "Wie schnell bekomme ich ein Angebot?",

        answer:
            "In der Regel erhalten Sie innerhalb von 24 Stunden eine kostenlose Rückmeldung."
    },

    {
        question:
            "Arbeiten Sie auch außerhalb der Geschäftszeiten?",

        answer:
            "Ja. Wir passen unsere Termine flexibel an Ihre Anforderungen an."
    },

    {
        question:
            "Welche Regionen betreuen Sie?",

        answer:
            "Wir arbeiten hauptsächlich in Hamburg und Umgebung."
    }

];


export default function FAQ() {

    const [active, setActive] = useState<number | null>(null);


    return (

        <section>


            <SectionHeading

                eyebrow="FAQ"

                title="Häufig gestellte Fragen"

                description="Antworten auf die wichtigsten Fragen rund um unseren Reinigungsservice."

            />



            <div
                className="
mx-auto
max-w-3xl
space-y-4
"
            >


                {questions.map((item, index) => (
                    <div
                        key={item.question}
                        className="
rounded-3xl
border
border-slate-100
bg-white
overflow-hidden
shadow-sm
"
                    >


                        <button

                            onClick={() =>
                                setActive(
                                    active === index
                                        ?
                                        null
                                        :
                                        index
                                )
                            }

                            className="
flex
w-full
items-center
justify-between
p-6
text-left
"

                        >

                            <span
                                className="
font-semibold
text-slate-900
"
                            >
                                {item.question}
                            </span>


                            <Plus
                                className={`
transition
${active === index
                                        ?
                                        "rotate-45 text-blue-600"
                                        :
                                        "text-slate-400"
                                    }
`}
                            />


                        </button>



                        <AnimatePresence>

                            {active === index && (

                                <motion.div

                                    initial={{
                                        height: 0,
                                        opacity: 0
                                    }}

                                    animate={{
                                        height: "auto",
                                        opacity: 1
                                    }}

                                    exit={{
                                        height: 0,
                                        opacity: 0
                                    }}

                                    className="
overflow-hidden
"

                                >

                                    <p
                                        className="
px-6
pb-6
text-slate-600
leading-relaxed
"
                                    >
                                        {item.answer}
                                    </p>

                                </motion.div>

                            )}

                        </AnimatePresence>


                    </div>

                ))}


            </div>


        </section>

    );

}