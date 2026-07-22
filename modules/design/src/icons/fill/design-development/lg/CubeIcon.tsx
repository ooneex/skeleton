import type { SVGProps } from "react";

export const CubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22.5 21.9937L4 14.1584V36.2295L22.5 44.429V21.9937Z" fill="currentColor" />
      <path d="M25.5 21.9937V44.429L44 36.2295V14.1584L25.5 21.9937Z" fill="currentColor" />
      <path
        d="M24 2.90613L5.00372 11.3255L24 19.371L42.9963 11.3255L24 2.90613Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
