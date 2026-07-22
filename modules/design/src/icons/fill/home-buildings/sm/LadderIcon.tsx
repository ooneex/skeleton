import type { SVGProps } from "react";

export const LadderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 19H2.5V17H13V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 14H3.5V12H14V14Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 9H4.79346V7H15V9Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 17H13.2979V15H21V17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.48371 4.3808C4.77643 2.99312 6.0009 2 7.41911 2H16V4H7.41911C6.94637 4 6.53822 4.33104 6.44064 4.7936L3.03129 20.9562V22H0.76709L4.48371 4.3808Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5163 4.3808C19.2236 2.99312 17.9991 2 16.5809 2H16.0081C15.5301 2 15.1175 2.33509 15.0195 2.80294L10.9986 22H13.2539V20.9886L16.8068 4.02575C17.179 4.11193 17.4778 4.40677 17.5594 4.7936L20.9726 20.9747V22H23.2329L19.5163 4.3808Z"
        fill="currentColor"
      />
    </svg>
  );
};
