import type { SVGProps } from "react";

export const MilitaryVestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2627 6.06836C11.6901 8.34795 13.6807 10 16 10C18.3193 10 20.3099 8.34795 20.7373 6.06836L21.5 2H25V10.5303C25 12.0868 25 14 28 16.0615V18H24V20H28V23H24V25H28V30H4V25H8V23H4V20H8V18H4V16.0615C7 14 7 12.0868 7 10.5303V2H10.5L11.2627 6.06836ZM13 23V25H19V23H13ZM11 20H21V14H11V20Z"
        fill="currentColor"
      />
      <path d="M31 18V20H28V18H31Z" fill="currentColor" data-color="color-2" />
      <path d="M4 18V20H1V18H4Z" fill="currentColor" data-color="color-2" />
      <path d="M31 23V25H28V23H31Z" fill="currentColor" data-color="color-2" />
      <path d="M4 23V25H1V23H4Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
