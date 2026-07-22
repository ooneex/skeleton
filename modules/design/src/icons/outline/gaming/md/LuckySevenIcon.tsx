import type { SVGProps } from "react";

export const LuckySevenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 25.6667V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 8.99998V6.33331" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 25.6667V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 8.99998V6.33331" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <rect
        x="2"
        y="6"
        width="28"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M14 13L18 13V13.6667L16.3379 15.5134C15.4766 16.4705 15 17.7124 15 19V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 13L26 13V13.6667L24.3379 15.5134C23.4766 16.4705 23 17.7124 23 19V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 13L10 13V13.6667L8.33793 15.5134C7.4766 16.4705 7 17.7124 7 19V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
