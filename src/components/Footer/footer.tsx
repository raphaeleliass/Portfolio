import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface FooterProps extends ComponentProps<"footer"> {
  children: ReactNode;
}

function Footer({ className, children, ...props }: FooterProps) {
  return (
    <footer {...props}
      className={cn(
        "flex items-center text-white flex-col w-full bg-neutral-900 py-20",
        className,
      )}
    >
      {children}

      <p className="text-[0.6rem] py-12 bottom-full uppercase bg-red-500 absolute">todos os direitos reservados &copy </p>
    </footer>
  );
}

export default Footer;
