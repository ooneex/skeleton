import type { SVGProps } from "react";

export const PlaneTakeOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.78453 10.2264L7.52202 11.4335L11.0392 9.56768L7.10004 6.33563L8.86781 4.56786L14.9867 7.4736L19.0766 5.30395C20.0783 4.77253 21.3208 5.1944 21.7918 6.22591C22.2235 7.17111 21.8468 8.28907 20.9311 8.78029L8.7648 15.3072C8.0196 15.7069 7.1035 15.5948 6.47672 15.0271L2.50906 11.4335L4.78453 10.2264Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 20H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
