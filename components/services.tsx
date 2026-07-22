import {
    Building2,
    Home,
    PanelsTopLeft,
    Sparkles,
    Hammer,
    Construction,
} from "lucide-react";

import SectionHeading from "./section-heading";


const services = [
    {
        title: "Büroreinigung",
        description: "Saubere Arbeitsplätze für produktive Teams.",
        icon: Building2
    },

    {
        title: "Haushaltsreinigung",
        description: "Professionelle Reinigung für Ihr Zuhause.",
        icon: Home
    },

    {
        title: "Fensterreinigung",
        description: "Kristallklare Fenster ohne Aufwand.",
        icon: PanelsTopLeft
    },

    {
        title: "Treppenhausreinigung",
        description: "Gepflegte Eingangsbereiche für Besucher.",
        icon: Sparkles
    },

    {
        title: "Grundreinigung",
        description: "Tiefenreinigung für jede Immobilie.",
        icon: Hammer
    },

    {
        title: "Bauendreinigung",
        description: "Perfekte Übergabe nach Bauprojekten.",
        icon: Construction
    }

];



export default function Services() {
    return (
        <section>
            <SectionHeading

                eyebrow="Unsere Leistungen"

                title="Professionelle Reinigungslösungen"

                description="
Von Bürogebäuden bis Privathaushalten:
Wir bieten maßgeschneiderte Reinigung
mit höchsten Qualitätsstandards.
"

            />


            <div
                className="
grid gap-6
md:grid-cols-2
lg:grid-cols-3
"
            >

                {services.map((service) => {

                    const Icon = service.icon;


                    return (

                        <div

                            key={service.title}
                            className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-premium transition"

                        >
                            <div
                                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 "
                            >
                                <Icon size={28} />
                            </div>
                            <h3
                                className="text-xl font-bold text-slate-900"
                            >
                                {service.title}
                            </h3>

                            <p
                                className="mt-3 leading-relaxed text-slate-600"
                            >
                                {service.description}
                            </p>


                        </div>

                    )

                })}

            </div>


        </section>

    )

}