import type { SVGProps } from "react";

export const SubscriptIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 28H22V27.6562L27.4651 23.7073C28.4291 23.0108 29 21.8938 29 20.7046V20.5C29 18.567 27.4015 17 25.4685 17V17C23.57 17 22 18.539 22 20.4375V20.4375"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16.8231 4H17L3 28H3.18048" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16.8231 28H17L3 4H3.18048" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
