import type { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11.9309C3 6.96962 6.58664 2.84801 11.3082 2.0152L12.3562 3.4854C11.7135 4.64295 11.3472 5.97536 11.3472 7.39637C11.3472 11.853 14.9592 15.4655 19.4145 15.4655C19.8969 15.4655 20.3686 15.4232 20.8263 15.3425L21.8743 16.8127C20.158 19.9041 16.8581 22 13.0674 22C7.50714 22 3 17.4917 3 11.9309Z"
        fill="currentColor"
      />
    </svg>
  );
};
