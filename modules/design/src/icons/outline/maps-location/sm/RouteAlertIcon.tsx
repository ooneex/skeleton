import type { SVGProps } from "react";

export const RouteAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.99998 18.0001H6.39798C5.32698 18.0001 4.65498 16.8421 5.18598 15.9121L10.788 6.10806C11.324 5.17006 12.676 5.17006 13.211 6.10806L18.813 15.9121C19.345 16.8421 18.673 18.0001 17.601 18.0001H15.999"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 11V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 19C12.6904 19 13.25 18.4404 13.25 17.75C13.25 17.0596 12.6904 16.5 12 16.5C11.3096 16.5 10.75 17.0596 10.75 17.75C10.75 18.4404 11.3096 19 12 19Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path d="M22 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
