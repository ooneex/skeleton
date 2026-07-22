import type { SVGProps } from "react";

export const SpadesSuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M32 44H16V43.0476C19.5 41.5 21.0065 39.7207 21.0666 36.5385V35H20.5C19.1146 35.9365 17.4845 36.3077 15.6912 36.3077C10.338 36.3077 6 31.7314 6 26.0871C6 16.4328 20.0076 5.90045 24 4C27.9924 5.90045 42 16.4328 42 26.0871C42 31.7314 37.6584 36.3077 32.3088 36.3077C30.5164 36.3077 28.9545 35.9361 27.5701 35H27V36.5385C27.0593 39.7211 28.5 41.5 32 43.0476V44Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
