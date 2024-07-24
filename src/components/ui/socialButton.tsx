import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface SocialButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  href: string
}

function SocialButton({ className, href, children, ...props }: SocialButtonProps) {
  return (
    <button className={cn("flex hover:text-blue-400 transition-all items-center text-white justify-center p-2", className)}>
      <a target="_blank" href={href}>{children}</a>
    </button>
  );
}

export default SocialButton;
