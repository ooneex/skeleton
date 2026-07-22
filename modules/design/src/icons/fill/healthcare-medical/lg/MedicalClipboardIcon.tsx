import type { SVGProps } from "react";

export const MedicalClipboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 7V3.5C16 2.11929 17.1193 1 18.5 1H29.5C30.8807 1 32 2.11929 32 3.5V7H16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4V7C13 8.65685 14.3431 10 16 10H32C33.6569 10 35 8.65685 35 7V4H36C39.3137 4 42 6.68629 42 10V40C42 43.3137 39.3137 46 36 46H12C8.68629 46 6 43.3137 6 40V10C6 6.68629 8.68629 4 12 4H13ZM21 16V23H14V29H21V36H27V29H34V23H27V16H21Z"
        fill="currentColor"
      />
    </svg>
  );
};
