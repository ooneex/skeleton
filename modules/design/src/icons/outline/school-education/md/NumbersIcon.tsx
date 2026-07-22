import type { SVGProps } from "react";

export const NumbersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 26H15V24.5714V24.5714C15 22.8388 16.0347 21.2737 17.6287 20.5949L24.2693 17.7672C26.5316 16.8038 28 14.5826 28 12.1237V12.1237C28 8.55075 24.9582 5.73398 21.3958 6.00802L20.6975 6.06173C17.4825 6.30904 15 8.98986 15 12.2143V12.2143"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9 26V6H8L2.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
