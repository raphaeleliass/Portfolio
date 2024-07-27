import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import SocialButton from "../ui/socialButton";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterProps extends ComponentProps<"footer"> {}

function Footer({ className, ...props }: FooterProps) {
  return (
    <>
      <footer
        {...props}
        className={cn(
          "flex w-full flex-row items-center justify-center bg-neutral-900 py-20 text-white",
          className,
        )}
      >
        <SocialButton href="https://linkedin.com/in/raphaeleliass">
          <FaLinkedin className="size-8" />
        </SocialButton>
        <SocialButton href="https://github.com/raphaeleliass">
          <FaGithub className="size-8" />
        </SocialButton>
        <SocialButton href="https://instagram.com/raphaeleliass">
          <FaInstagram className="size-8" />
        </SocialButton>
        <SocialButton href="https://wa.me/5528999763920">
          <FaWhatsapp className="size-8" />
        </SocialButton>
      </footer>
      <p className="flex gap-2 text-xs pb-1 justify-center bg-neutral-900 text-custom_White">
        Criado e Desenvolvido por
        <Link
          to="/links"
          className="font-semibold text-sky-500 transition-all hover:text-sky-400"
        >
          Raphael Elias
        </Link>
      </p>
    </>
  );
}

export default Footer;
