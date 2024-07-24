import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface TitleProps extends ComponentProps<"h2"> {
  children: ReactNode;
}

function Title({ className, children, ...props }: TitleProps) {
  return (
    <h2
      className={cn(
        "flex flex-row justify-center gap-1 text-center font-Poppins text-3xl font-bold drop-shadow-xl md:justify-start md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Title;
