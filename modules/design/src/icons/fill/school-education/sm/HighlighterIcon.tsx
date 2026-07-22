import type { SVGProps } from "react";

export const HighlighterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 6L9.5 6L9.5 3.09425L14.5 1.84422L14.5 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M5.76245 14.5058L7.49187 12.569C7.81915 12.2025 8.00005 11.7283 8.00005 11.2369V7.99988H16.0001V11.2369C16.0001 11.7283 16.1809 12.2025 16.5082 12.569L18.2378 14.5059C18.6155 14.9289 18.8633 15.4476 18.9574 16H5.04279C5.13692 15.4475 5.38467 14.9288 5.76245 14.5058Z"
        fill="currentColor"
      />
      <path d="M5.00016 18L5.00012 21.9999L19 22L19 18H5.00016Z" fill="currentColor" />
    </svg>
  );
};
