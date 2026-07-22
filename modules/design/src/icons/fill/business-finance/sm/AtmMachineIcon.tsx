import type { SVGProps } from "react";

export const AtmMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 20H22V22H2V20Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4C19 2.34315 17.6569 1 16 1H8C6.34315 1 5 2.34315 5 4V18H19L19 4ZM16 5V11H8L8 5L16 5ZM11 13V15H16V13H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
