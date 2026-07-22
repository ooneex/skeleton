import type { SVGProps } from "react";

export const LadderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 25H3V23H17V25Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.5 18H4.5V16H18.5V18Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 11H6V9H20V11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 23H17.5V21H28.5V23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.94728 5.18309C6.33415 3.32873 7.96869 2 9.86298 2H22.0001V4H9.86298C8.91584 4 8.09856 4.66437 7.90513 5.59155L3.03014 28.959V30H0.769897L5.94728 5.18309Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0373 5.18071C25.6495 3.32748 24.0154 2 22.1221 2H21.4106C20.932 2 20.5191 2.33592 20.4217 2.80453L14.7709 30H17.0277V28.9695L22.2156 4.00216C23.1221 4.0442 23.8922 4.69439 24.0797 5.59035L28.9685 28.9526V30H31.231L26.0373 5.18071Z"
        fill="currentColor"
      />
    </svg>
  );
};
