import type { SVGProps } from "react";

export const RulerPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M41 13H29V39.3621L35 46.5621L41 39.3621V13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2H23V46H7V2ZM10 30V33H14V30H10ZM10 37V40H17V37H10ZM10 25.5V22.5H17V25.5H10ZM10 18H14V15H10V18ZM10 11L17 11V8H10V11Z"
        fill="currentColor"
      />
      <path d="M41 10V2L29 2.00013V10H41Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
