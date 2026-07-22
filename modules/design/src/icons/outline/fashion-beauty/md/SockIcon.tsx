import type { SVGProps } from "react";

export const SockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 7H23" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M23 16L21.5557 15.848C18.2595 15.501 15.9955 19.0836 17.7239 21.9118L19 24"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M7 20L15 28" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M12 15V1.99999H23V18.7287C23 19.5412 22.6704 20.3191 22.0865 20.8842L14.3229 28.3991C12.0113 30.6366 8.3022 30.5011 6.16 28.1009C4.12128 25.8166 4.26758 22.3255 6.49028 20.2197L12 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
