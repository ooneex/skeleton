import type { SVGProps } from "react";

export const CurrencyEuroIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7495 4C9.49598 4 6 7.55492 6 12C6 16.4451 9.49598 20 13.7495 20C15.4882 20 17.0931 19.4099 18.3885 18.4088L19.1797 17.7973L20.4027 19.3797L19.6115 19.9912C17.982 21.2506 15.9508 22 13.7495 22C8.33856 22 4 17.496 4 12C4 6.50395 8.33856 2 13.7495 2C15.9508 2 17.982 2.74942 19.6115 4.00876L20.4027 4.62025L19.1797 6.20274L18.3885 5.59124C17.0931 4.5901 15.4882 4 13.7495 4Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 9H12V11H2V9Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13H12V15H2V13Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
