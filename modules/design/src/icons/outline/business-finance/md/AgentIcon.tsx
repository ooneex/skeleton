import type { SVGProps } from "react";

export const AgentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 7C14.342 7 13 5.658 13 4C13 2.342 14.342 1 16 1C17.658 1 19 2.342 19 4C19 5.658 17.658 7 16 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 31H13L11.8996 20.5L9.49927 19.1875L10.487 12.7038C10.6298 11.7679 11.2167 10.987 12.0328 10.6654C12.9222 10.315 14.6023 10 16.0005 10C16.6966 10 18.4595 10.0787 19.9237 10.6484C20.753 10.9712 21.3675 11.7548 21.5115 12.7038L22.4993 19.1875L20.0989 20.5L19 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M15.5 10L14 16L16 18L18 16L16.5 10" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M7 22H10V31H6L7 22Z" fill="currentColor" data-color="color-2" data-stroke="none" data-cap="butt" />
    </svg>
  );
};
