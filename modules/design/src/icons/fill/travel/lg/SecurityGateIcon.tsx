import type { SVGProps } from "react";

export const SecurityGateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1H41V44H38V4H10V44H7V1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 16C26.2091 16 28 14.2091 28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12C20 14.2091 21.7909 16 24 16Z"
        fill="currentColor"
      />
      <path
        d="M28.1545 46H19.8464L18.3236 32.4667L15 30.6583L16.3676 21.7252C16.5654 20.4358 17.378 19.3599 18.508 18.9168C19.7394 18.434 22.0657 18 24.0016 18C24.9655 18 27.4064 18.1085 29.4338 18.8933C30.5821 19.3382 31.4329 20.4177 31.6323 21.7252L33 30.6583L29.6764 32.4667L28.1545 46Z"
        fill="currentColor"
      />
    </svg>
  );
};
