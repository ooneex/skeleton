import type { SVGProps } from "react";

export const FoodScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 14H13V19H11V14Z" fill="currentColor" data-color="color-2" />
      <path d="M13 3V7H11V3H13Z" fill="currentColor" data-color="color-2" />
      <path d="M22 2V4H2V2H22Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C16.9706 6 21 10.0294 21 15V22H3V15C3 10.0294 7.02944 6 12 6ZM12 10C9.23858 10 7 12.2386 7 15V18H17V15C17 12.2386 14.7614 10 12 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
