import type { SVGProps } from "react";

export const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45.9643 11.3409C45.6361 8.33729 43.0911 6 40.0001 6H8.00011C4.90912 6 2.36404 8.33733 2.03589 11.341L24 22.323L45.9643 11.3409Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M2 14.6772V36C2 39.3137 4.68629 42 8 42H40C43.3137 42 46 39.3137 46 36V14.6771L23.9999 25.6772L2 14.6772Z"
        fill="currentColor"
      />
    </svg>
  );
};
