import type { SVGProps } from "react";

export const RoadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1455 4H37.8545L44.1703 44H3.82971L10.1455 4ZM25.5 33V42H22.5V33H25.5ZM25.5 22H22.5V29H25.5V22ZM25.5 13V18H22.5V13H25.5ZM25.5 5.99H22.5V9H25.5V5.99Z"
        fill="currentColor"
      />
    </svg>
  );
};
