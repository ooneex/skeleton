import type { SVGProps } from "react";

export const TypographyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 5V2H20V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
