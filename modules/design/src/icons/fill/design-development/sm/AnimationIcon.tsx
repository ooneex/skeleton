import type { SVGProps } from "react";

export const AnimationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2L22 14L10 14L10 2L22 2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 5L4 11L2 11L2 5L4 5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 3L8 13L6 13L6 3L8 3Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 20C5.5 18.3431 6.84315 17 8.5 17C10.1569 17 11.5 18.3431 11.5 20C11.5 21.6569 10.1569 23 8.5 23C6.84315 23 5.5 21.6569 5.5 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M12.374 21H22V19H12.374C12.4563 19.3196 12.5 19.6547 12.5 20C12.5 20.3453 12.4563 20.6804 12.374 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M4.62602 19C4.54375 19.3196 4.5 19.6547 4.5 20C4.5 20.3453 4.54375 20.6804 4.62602 21H1V19H4.62602Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
