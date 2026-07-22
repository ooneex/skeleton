import type { SVGProps } from "react";

export const LetterSpacingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2L22 22L20 22L20 2L22 2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 15H8.5V13H15.5V15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.823 6H13.177L17.977 18H15.3295V16.7664L12 8.44258L8.65663 16.801V18H6.02296L10.823 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 2L4 22L2 22L2 2L4 2Z" fill="currentColor" />
    </svg>
  );
};
