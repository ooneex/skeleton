import type { SVGProps } from "react";

export const ChampagneGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 30V22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M9.5 15H22.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M10.4 2L9.4888 15.0171C9.22455 18.7921 12.2157 22 16 22C19.7843 22 22.7754 18.7921 22.5112 15.0171L21.6 2H10.4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 30H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
