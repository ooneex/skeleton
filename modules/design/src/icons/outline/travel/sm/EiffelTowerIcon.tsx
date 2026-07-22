import type { SVGProps } from "react";

export const EiffelTowerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 14V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 2V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M14 2H10C10 9.70077 5.77947 19.0758 2 21.5L2.00001 22H8L9.17083 19.6584C9.67901 18.642 10.7178 18 11.8541 18H12.1459C13.2822 18 14.321 18.642 14.8292 19.6584L16 22H22L22 21.5C18.2431 19.1033 14 9.92296 14 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 14H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
