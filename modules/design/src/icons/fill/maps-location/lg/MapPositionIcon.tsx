import type { SVGProps } from "react";

export const MapPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14.5 4.51367L2 9.29535V42.4191L14.5 37.6344L14.5 4.51367Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 31C29 26.5817 32.5817 23 37 23C41.4183 23 45 26.5817 45 31C45 35.4183 41.4183 39 37 39C32.5817 39 29 35.4183 29 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.5 36.5V46H35.5V36.5H38.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M30.5 43.4576L17.5 37.7701L17.5 4.54224L30.5 10.2297L30.5 22.1249C27.7714 24.1266 26 27.3564 26 30.9999C26 34.6434 27.7714 37.8732 30.5 39.875V43.4576Z"
        fill="currentColor"
      />
      <path
        d="M33.5 20.5686L33.5 10.3657L46 5.58105V24.6739C44.0093 21.847 40.7203 20.0001 37 20.0001C35.7764 20.0001 34.5994 20.1998 33.5 20.5686Z"
        fill="currentColor"
      />
    </svg>
  );
};
