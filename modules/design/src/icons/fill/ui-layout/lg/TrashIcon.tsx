import type { SVGProps } from "react";

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.0834 19H8.91699L10.6353 40.4785C10.8847 43.5967 13.488 46 16.6162 46H31.3842C34.5124 46 37.1156 43.5967 37.3651 40.4785L39.0834 19ZM17.8803 24.3894L19.1104 40.3805L16.1192 40.6106L14.8892 24.6195L17.8803 24.3894ZM25.5 24.5V40.5H22.5V24.5H25.5ZM31.8803 40.6106L33.1104 24.6195L30.1192 24.3894L28.8892 40.3805L31.8803 40.6106Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5C20.4477 5 20 5.44772 20 6V10.5H17V6C17 3.79086 18.7909 2 21 2H27C29.2091 2 31 3.79086 31 6V10.5H28V6C28 5.44772 27.5523 5 27 5H21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 13C5 10.2386 7.23858 8 10 8H38C40.7614 8 43 10.2386 43 13V16H5V13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
