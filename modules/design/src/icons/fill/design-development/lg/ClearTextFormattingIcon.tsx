import type { SVGProps } from "react";

export const ClearTextFormattingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22.5 7H25.5V22.9818L22.5 26.1007V7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 6H41V9H7V6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.7736 6.34776L6.35325 43.7681L4.23193 41.6468L41.6523 4.22644L43.7736 6.34776Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M22.5 31.864V42H25.5V28.864L22.5 31.864Z" fill="currentColor" />
    </svg>
  );
};
