import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type H1PropsType = ComponentProps<"h1">;

export const H1 = ({ className, ...props }: H1PropsType) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  );
};

type H2PropsType = ComponentProps<"h2">;

export const H2 = ({ className, ...props }: H2PropsType) => {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-semibold leading-[1.15] tracking-tight", className)} {...props} />
  );
};

type H3PropsType = ComponentProps<"h3">;

export const H3 = ({ className, ...props }: H3PropsType) => {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold leading-[1.15] tracking-tight", className)} {...props} />
  );
};

type H4PropsType = ComponentProps<"h4">;

export const H4 = ({ className, ...props }: H4PropsType) => {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold leading-tight tracking-tight", className)} {...props} />;
};

type H5PropsType = ComponentProps<"h5">;

export const H5 = ({ className, ...props }: H5PropsType) => {
  return <h5 className={cn("scroll-m-20 text-lg font-semibold leading-snug tracking-tight", className)} {...props} />;
};

type H6PropsType = ComponentProps<"h6">;

export const H6 = ({ className, ...props }: H6PropsType) => {
  return <h6 className={cn("scroll-m-20 text-base font-medium leading-[1.4]", className)} {...props} />;
};

H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
H4.displayName = "H4";
H5.displayName = "H5";
H6.displayName = "H6";
