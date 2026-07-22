import type { SVGProps } from "react";

export const HoodieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M28 30V20.954V21.454" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 30V20.954V21.454" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 43L16 35H32L35 43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M34 12H38C40.7614 12 43 14.2386 43 17V38C43 40.7614 40.7614 43 38 43H10C7.23858 43 5 40.7614 5 38V17C5 14.2386 7.23858 12 10 12H14"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12.5 3H35.5C37.9853 3 40 5.01472 40 7.5C40 9.98528 37.9853 12 35.5 12H33L32.3728 15.1359C31.5746 19.1271 28.0702 22 24 22C19.9298 22 16.4254 19.1271 15.6272 15.1359L15 12H12.5C10.0147 12 8 9.98528 8 7.5C8 5.01472 10.0147 3 12.5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
