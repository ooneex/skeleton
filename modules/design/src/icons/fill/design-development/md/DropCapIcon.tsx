import type { SVGProps } from "react";

export const DropCapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12H5.00001V10H12V12Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29957 2H9.70043L14.4277 15H11.8466V13.7543L8.5 4.55118L5.14097 13.7885V15H2.5723L7.29957 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 11H30V13H17V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 3L30 3V5L17 5V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 19L30 19V21L2 21L2 19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 27H30V29H2V27Z" fill="currentColor" />
    </svg>
  );
};
