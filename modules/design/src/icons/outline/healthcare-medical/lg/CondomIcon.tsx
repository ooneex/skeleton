import type { SVGProps } from "react";

export const CondomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 38V16.7826C15 13.203 17.4017 9.9014 20.5 8.5L21.0528 5.45968C21.3118 4.03533 22.5523 3 24 3V3C25.4477 3 26.6882 4.03533 26.9472 5.45967L27.5 8.5C30.5983 9.9014 33 13.203 33 16.7826V38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M20 31V18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M34.5 43H13.5C12.1193 43 11 41.8807 11 40.5C11 39.1193 12.1193 38 13.5 38H34.5C35.8807 38 37 39.1193 37 40.5C37 41.8807 35.8807 43 34.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
