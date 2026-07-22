import type { SVGProps } from "react";

export const HouseDocumentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 21.4258V28.5C30 29.8807 28.8807 31 27.5 31H25V25H21V31H18.5C17.1193 31 16 29.8807 16 28.5V21.4258L23 17.3428L30 21.4258Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 1C27.2091 1 29 2.79086 29 5V18.5264L24.0078 15.6152C23.3851 15.252 22.6149 15.252 21.9922 15.6152L14.9922 19.6982C14.3778 20.0567 14 20.7145 14 21.4258V31H7C4.79086 31 3 29.2091 3 27V5C3 2.79086 4.79086 1 7 1H25ZM8 15H19V13H8V15ZM8 10H16V8H8V10ZM19 10H24V8H19V10Z"
        fill="currentColor"
      />
    </svg>
  );
};
