import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface ColorfulCardProps extends ComponentProps<"span"> {
  children?: ReactNode;
  className?: string;
}

function ColorfulCard({ children, className, ...props }: ColorfulCardProps) {
  return (
    <span
      {...props}
      className={clsx(
        "flex aspect-square w-full flex-col items-center justify-center rounded-3xl p-12 px-1 text-center font-Poppins text-4xl font-bold lg:text-6xl",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default ColorfulCard;
