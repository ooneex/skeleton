import type { SVGProps } from "react";

export const HoodieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 8H24.8605C26.5709 8 27.9351 9.42766 27.8574 11.1362L27.1302 27.1362C27.0573 28.7385 25.7372 30 24.1333 30H7.86673C6.26285 30 4.94266 28.7385 4.86983 27.1362L4.14256 11.1362C4.06489 9.42766 5.42914 8 7.13946 8H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M20 19L19 14L19.1 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 19L13 14L12.9 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 2H23C24.6569 2 26 3.34315 26 5C26 6.65685 24.6569 8 23 8H22L21.0989 11.1539C20.4484 13.4305 18.3677 15 16 15C13.6324 15 11.5516 13.4305 10.9011 11.1539L10 8H9C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M10 30L12 25H20L22 30" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
