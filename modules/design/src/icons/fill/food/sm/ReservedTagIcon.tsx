import type { SVGProps } from "react";

export const ReservedTagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8486 18.1855L23.875 18.3604C23.9579 19.2262 23.2768 19.9998 22.3818 20H8.24609C7.30302 20 6.48764 19.3411 6.29004 18.4189L3.2002 4H20.8086L23.8486 18.1855ZM11 11V13H17V11H11Z"
        fill="currentColor"
      />
      <path
        d="M4.15466 18H1.91149C1.00992 17.9999 0.326632 17.2156 0.419307 16.3447L0.448604 16.1689L2.14978 8.64453L4.15466 18Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
