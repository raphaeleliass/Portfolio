import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface DescriptionProps extends ComponentProps<"p"> {
  children: string;
}

function Description({ className, children, ...props }: DescriptionProps) {
  return (
    <p
      {...props}
      className={cn(
        "font-base flex flex-row items-center justify-center gap-1 text-xs italic text-neutral-950 md:text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Description;
