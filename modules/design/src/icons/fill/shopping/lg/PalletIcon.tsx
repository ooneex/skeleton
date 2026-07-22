import type { SVGProps } from "react";

export const PalletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 37H47V44.0001H37V40.0001H29V44.0001H19V40.0001H11V44.0001H1V37Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7686 6L47 33V34H1V33L8.23139 6H39.7686ZM33.7518 9H30.7264L33.596 31H36.6214L33.7518 9ZM25.5 9H22.5V31H25.5V9ZM17.2478 9H14.2228L11.3757 31H14.4007L17.2478 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
