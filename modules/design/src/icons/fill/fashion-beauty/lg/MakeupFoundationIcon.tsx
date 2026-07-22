import type { SVGProps } from "react";

export const MakeupFoundationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M37 5H29V9H19L19 2H37V5Z" fill="currentColor" />
      <path d="M32 18V12H16V18H32Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 17C34.7614 17 37 19.2386 37 22V41C37 43.7614 34.7614 46 32 46H16C13.2386 46 11 43.7614 11 41V22C11 19.2386 13.2386 17 16 17H32ZM18 25V40H30V25H18Z"
        fill="currentColor"
      />
    </svg>
  );
};
