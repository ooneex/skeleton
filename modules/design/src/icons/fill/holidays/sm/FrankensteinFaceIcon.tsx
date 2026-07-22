import type { SVGProps } from "react";

export const FrankensteinFaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 11V13H20V11H24Z" fill="currentColor" data-color="color-2" />
      <path d="M4 11V13H0V11H4Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9H9V7H15V9H17V7H22V13C22 18.5228 17.5228 23 12 23C6.47715 23 2 18.5228 2 13V7H7V9ZM10 16V18H14V16H10ZM8 11C6.89543 11 6 11.8954 6 13C6 14.1046 6.89543 15 8 15C9.10457 15 10 14.1046 10 13C10 11.8954 9.10457 11 8 11ZM16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11Z"
        fill="currentColor"
      />
      <path d="M22 5H17V3H15V5H9V3H7V5H2V1H22V5Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
