import clsx from "clsx";
import { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  className?: string;
}

function BaseCard({ children, className }: BaseCardProps) {
  return (
    <span
      className={clsx(
        "flex h-full w-full rounded-3xl bg-neutral-800 bg-opacity-40 p-6 text-white backdrop-blur-lg",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default BaseCard;
