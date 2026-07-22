import type { SVGProps } from "react";

export const BeverageCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.4131 1.44336L15.0566 6.16309L13.5869 4.80664L17.9434 0.0869141L19.4131 1.44336Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M6.09472 23H17.9053L19.0054 12H4.99454L6.09472 23Z" fill="currentColor" />
      <path
        d="M12 1C12.8749 1 13.7123 1.1609 14.4844 1.4541L13.5869 4.80664L15.9629 2.23145C17.5366 3.31462 18.6459 5.0233 18.9287 7H5.07129C5.55654 3.60773 8.47355 1 12 1Z"
        fill="currentColor"
      />
      <path d="M21 7V10H3V7H21Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
