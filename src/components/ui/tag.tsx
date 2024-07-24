import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface TagProps extends ComponentProps<"p"> {
  children: ReactNode;
}

function Tag({ className, children, ...props }: TagProps) {
  return (
    <p
      className={clsx(
        "flex items-center justify-center rounded-full px-2 py-px text-xs text-neutral-600 ring-1 ring-neutral-700",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export default Tag;
