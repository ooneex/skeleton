import type { SVGProps } from "react";

export const NailPolishIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 19H17V10H31V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 40C37 43.3137 34.3137 46 31 46H17C13.6863 46 11 43.3137 11 40V22H37V40ZM16.2725 28L18.542 39H29.458L31.7275 28H16.2725Z"
        fill="currentColor"
      />
      <path
        d="M27.5 2C29.433 2 31 3.567 31 5.5V7H17V5.5C17 3.567 18.567 2 20.5 2H27.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
