import type { SVGProps } from "react";

export const BackpackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 11.5V9C18 5.68629 20.6863 3 24 3V3C27.3137 3 30 5.68629 30 9V11.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11.5 43C10.1193 43 9 41.8807 9 40.5L9 25C9 16.7157 15.7157 10 24 10V10C32.2843 10 39 16.7157 39 25L39 40.5C39 41.8807 37.8807 43 36.5 43L11.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 38L16 35C16 30.5817 19.5817 27 24 27V27C28.4183 27 32 30.5817 32 35L32 38L16 38Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M19 17H29V22H19V17Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
