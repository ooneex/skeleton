import type { SVGProps } from "react";

export const AccessibilityIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.5 19.5L6.60357 17.7376C5.68227 17.6011 5 16.8103 5 15.8789C5 14.8412 5.84122 14 6.87893 14H41.1211C42.1588 14 43 14.8412 43 15.8789C43 16.8103 42.3177 17.6011 41.3964 17.7376L29.5 19.5L32 46H27.5L25.5 32H22.5L20.5 46H16L18.5 19.5Z"
        fill="currentColor"
      />
      <path
        d="M24 11.5C26.4853 11.5 28.5 9.48528 28.5 7C28.5 4.51472 26.4853 2.5 24 2.5C21.5147 2.5 19.5 4.51472 19.5 7C19.5 9.48528 21.5147 11.5 24 11.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
