import BaseCard from "@/components/cards/baseCard";
import ColorfulCard from "@/components/cards/colorfulCard";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

function Home() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-neutral-950 py-12">
      <div className="flex w-full max-w-xs flex-col-reverse gap-4 md:max-w-3xl md:flex-row lg:max-w-6xl">
        <div className="flex flex-col gap-4 md:w-1/2">
          <BaseCard className="flex items-center justify-center font-Poppins text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
            <h2>transformando ideias em realidade</h2>
            <Button className="absolute">fale comigo</Button>
          </BaseCard>
          <div className="flex flex-row gap-4">
            <ColorfulCard className="bg-emerald-500 text-white">
              <h2 className="font-Poppins">2+</h2>
              <p className="text-center text-xs">
                anos de <br /> experiência
              </p>
            </ColorfulCard>
            <ColorfulCard className="cursor-pointer bg-yellow-500 saturate-150 duration-500 ease-in-out">
              <h2 className="font-Poppins">21+</h2>
              <p className="text-center text-xs">
                projetos <br /> concluídos
              </p>
            </ColorfulCard>
            <ColorfulCard className="bg-rose-500 text-white">
              <h2 className="font-Poppins">7+</h2>
              <p className="text-center text-xs">
                tecnologias <br /> aprendidas
              </p>
            </ColorfulCard>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <BaseCard className="sticky inset-0 z-50 flex flex-row items-center justify-between">
            <a href="#" className="flex flex-row gap-1 font-bold capitalize">
              <p className="text-neutral-400">raphael</p>elias
            </a>
            <button className="p-2">
              <HamburgerMenuIcon />
            </button>
          </BaseCard>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="rounded-3xl bg-indigo-600 md:w-1/2"></div>
            <div className="flex flex-col gap-4 md:w-1/2">
              <BaseCard className="flex items-center justify-between">
                <span>
                  <FaUser />
                </span>
                <p>Raphael Elias</p>
              </BaseCard>
              <BaseCard className="flex flex-col items-center justify-between gap-4">
                <div className="flex w-full flex-row items-center justify-between">
                  <span>
                    <FaLocationArrow />
                  </span>
                  <p>Guaçuí - ES</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d932.6142092030443!2d-41.6777572!3d-20.7727982!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1720985084444!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  className="aspect-video w-full rounded-xl"
                ></iframe>
              </BaseCard>
              <BaseCard>
                <button>
                  <FaLinkedin className="" />
                </button>
                <button>
                  <FaWhatsapp className="" />
                </button>
                <button>
                  <FaGithub className="" />
                </button>
                <button>
                  <FaInstagram className="" />
                </button>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs bg-white rounded-3xl p-32 md:max-w-3xl lg:max-w-6xl"></div>
    </section>
  );
}

export default Home;
