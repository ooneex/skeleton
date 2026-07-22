import type { SVGProps } from "react";

export const ThermometerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.85558 16.3228L7.684 19.1512"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20.5068 7.74262L13.3409 14.9086L9.80534 17.0299L5.82843 21.0068C5.04738 21.7879 3.78105 21.7879 3 21.0068C2.21895 20.2258 2.21895 18.9594 3 18.1784L6.97691 14.2015L9.09823 10.6659L16.2642 3.49998C17.4358 2.32841 19.3352 2.32841 20.5068 3.49998C21.6784 4.67156 21.6784 6.57105 20.5068 7.74262Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
