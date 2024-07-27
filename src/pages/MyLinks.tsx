import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function MyLinks() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center">
      <Card className="p-2">
        <CardHeader className="flex flex-row items-center space-x-4">
          <div className="size-16 rounded-full bg-slate-800" />
          <div className="">
            <CardTitle>Raphael Elias</CardTitle>
            <CardDescription>Desenvolvedor Front-end</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <ul className="flex flex-col items-start space-y-2">
            <li className="w-full rounded-full px-3 py-1.5 ring-1 ring-neutral-400">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/raphaeleliass"
              >
                <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                  <FaLinkedin className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                  <p className="font-Poppins text-lg">Linkedin</p>
                </label>
              </a>
            </li>
            <li className="w-full rounded-full px-3 py-1.5 ring-1 ring-neutral-400">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/raphaeleliass"
              >
                <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                  <FaGithub className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                  <p className="font-Poppins text-lg">Github</p>
                </label>
              </a>
            </li>
            <li className="w-full rounded-full px-3 py-1.5 ring-1 ring-neutral-400">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/raphaeleliass"
              >
                <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                  <FaInstagram className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                  <p className="font-Poppins text-lg">Instagram</p>
                </label>
              </a>
            </li>
            <li className="w-full rounded-full px-3 py-1.5 ring-1 ring-neutral-400">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/5528999763920"
              >
                <label className="flex w-48 flex-row justify-between space-x-2 transition-all hover:text-blue-600 md:w-auto">
                  <FaWhatsapp className="size-8 transition-all md:size-8 md:hover:translate-y-1" />
                  <p className="font-Poppins text-lg">Whatsapp</p>
                </label>
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default MyLinks;
