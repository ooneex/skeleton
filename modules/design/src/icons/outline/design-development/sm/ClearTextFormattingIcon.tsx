import type { SVGProps } from "react";

export const ClearTextFormattingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 4V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4 4H20H19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 17.69V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 21L21 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
