import type { SVGProps } from "react";

export const BottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.4619 5.00001L19.0497 1.33248C18.9645 0.573659 18.3227 9.4005e-06 17.5591 7.54538e-06L14.4533 0C13.6906 -3.25261e-06 13.0493 0.572392 12.9629 1.33023L12.5449 5.00001H19.4619Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9277 10.1006L22.0264 11.0312C23.8343 11.8327 25 13.6249 25 15.6025V32H7V15.6025C7 13.6249 8.16567 11.8327 9.97363 11.0312L12.0713 10.1006L12.3135 7H19.6895L19.9277 10.1006ZM9 17V26H23V17H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
