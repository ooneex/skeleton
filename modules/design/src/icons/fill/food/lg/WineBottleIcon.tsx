import type { SVGProps } from "react";

export const WineBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 15.9912L28.0273 16.3584C31.6091 17.6378 34 21.0306 34 24.834V46H14V24.834C14 21.0306 16.3909 17.6378 19.9727 16.3584L21 15.9912V9H27V15.9912ZM17 38H31V28H17V38Z"
        fill="currentColor"
      />
      <path
        d="M25 1C26.1046 1 27 1.89543 27 3V6H21V3C21 1.89543 21.8954 1 23 1H25Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
