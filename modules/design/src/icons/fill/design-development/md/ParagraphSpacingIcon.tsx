import type { SVGProps } from "react";

export const ParagraphSpacingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5858 16L16 20.4142L20.4142 16L19 14.5858L16 17.5858L13 14.5858L11.5858 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5858 10L16 5.58578L20.4142 10L19 11.4142L16 8.41421L13 11.4142L11.5858 10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H30V4H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 22H30V24H2V22Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 28H30V30H2V28Z" fill="currentColor" />
    </svg>
  );
};
