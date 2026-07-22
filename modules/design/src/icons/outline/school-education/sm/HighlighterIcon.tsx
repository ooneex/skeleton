import type { SVGProps } from "react";

export const HighlighterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 17L20 17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M14 8L14 3L10.0001 4L10.0001 8"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5.00012 20.9998L5.00017 16.5039C5.00018 15.7668 5.27153 15.0555 5.76245 14.5057L7.49187 12.569C7.81915 12.2024 8.00005 11.7283 8.00005 11.2369L8.00005 7.99985L16 7.99985L16 11.2369C16 11.7283 16.1809 12.2024 16.5082 12.569L18.2378 14.5059C18.7287 15.0557 19 15.767 19 16.5041L19 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
