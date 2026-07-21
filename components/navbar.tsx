"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  Menu,
  X,
  Sparkles,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";


const links = [
  {
    label: "Leistungen",
    href: "#leistungen",
  },
  {
    label: "Einblick",
    href: "#einblick",
  },
  // {
  //   label: "Referenzen",
  //   href: "#referenzen",
  // },
  {
    label: "FAQ",
    href: "#faq",
  },
];


export default function Navbar() {

  const [open,setOpen] =
    useState(false);

  const [scrolled,setScrolled] =
    useState(false);


  useEffect(()=>{

    const handler = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    window.addEventListener(
      "scroll",
      handler
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handler
      );

  },[]);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">

      <div
        className={`
        mx-auto max-w-7xl rounded-3xl
        transition-all duration-300
        // ${
        //   scrolled
        //   ?
          "bg-white/80 backdrop-blur-xl shadow-premium border border-white/60"
          // :
          // ""
        }
        `}
      >

        <div className="flex h-20 items-center justify-between px-6">


          <a
            href="#"
            className="flex items-center gap-3"
          >

            <div
              className="
              flex h-11 w-11 items-center justify-center
              rounded-2xl bg-blue-600 text-white
              "
            >
              <Sparkles
                size={20}
              />
            </div>


            <div>

              <p className="text-xs text-slate-500">
                Premium Service
              </p>

              <p className="font-bold text-slate-900">
                Reinigung Hamburg
              </p>

            </div>

          </a>



          <nav className="hidden lg:flex items-center gap-8">

            {links.map(link=>(
              <a
                key={link.href}
                href={link.href}
                className="
                text-sm font-medium
                text-slate-600
                hover:text-blue-600
                transition
                "
              >
                {link.label}
              </a>
            ))}

          </nav>



          <a
            href="#kontakt"
            className="
            hidden lg:inline-flex
            rounded-2xl
            bg-blue-600
            px-6 py-3
            text-sm font-semibold
            text-white
            shadow-lg shadow-blue-600/20
            hover:-translate-y-1
            transition
            "
          >
            Kostenloses Angebot
          </a>



          <button
            onClick={()=>setOpen(!open)}
            className="
            lg:hidden
            flex h-11 w-11
            items-center justify-center
            rounded-xl border
            "
          >
            {open
              ?
              <X/>
              :
              <Menu/>
            }
          </button>


        </div>

      </div>


      <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity:0,
            height:0,
          }}
          animate={{
            opacity:1,
            height:"auto",
          }}
          exit={{
            opacity:0,
            height:0,
          }}
          className="
          mt-3 rounded-3xl
          bg-white
          p-6
          shadow-premium
          lg:hidden
          "
        >

          <nav className="flex flex-col gap-4">

            {links.map(link=>(
              <a
                key={link.href}
                href={link.href}
                onClick={()=>setOpen(false)}
                className="
                rounded-xl px-4 py-3
                text-slate-700
                hover:bg-slate-50
                "
              >
                {link.label}
              </a>
            ))}


            <a
              href="#kontakt"
              className="
              mt-4 rounded-2xl
              bg-blue-600
              px-5 py-4
              text-center
              font-semibold
              text-white
              "
            >
              Angebot anfragen
            </a>

          </nav>

        </motion.div>

      )}

      </AnimatePresence>


    </header>
  );
}