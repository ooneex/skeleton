import type { SVGProps } from "react";

export const PowerLevelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 3.5L10.1561 8.4331" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12 3C7.09851 3 2.94578 6.20582 1.52419 10.6351L6.17114 12.5713C6.81207 9.94736 9.17862 8 12 8C14.8214 8 17.1879 9.94736 17.8289 12.5713L22.4758 10.6351C21.0542 6.20582 16.9015 3 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 13C13 14.7174 14.5 16.6587 14.5 18.2569C14.5 19.943 13.3806 21 12 21C10.6194 21 9.5 19.943 9.5 18.2569C9.5 16.6587 11 14.7174 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
