import type { SVGProps } from "react";

export const CameraSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 42C4.68629 42 2 39.3137 2 36L2 16C2 12.6863 4.68629 10 8 10L13 10L17.5 4H30.5L35 10L40 10L30.7083 19C29.0604 17.1588 26.6655 16 24 16C19.0294 16 15 20.0294 15 25C15 27.6655 16.1588 30.0604 18 31.7083L8 42Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.1213 7.00001L3.99998 47.1213L1.87866 45L42 4.87869L44.1213 7.00001Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M21.6688 33.6952C22.4123 33.894 23.1938 34 24 34C28.9706 34 33 29.9706 33 25C33 24.1938 32.894 23.4123 32.6952 22.6688L43.9128 11.4512C45.1908 12.5515 46 14.1813 46 16V36C46 39.3137 43.3137 42 40 42L13.364 42L21.6688 33.6952Z"
        fill="currentColor"
      />
    </svg>
  );
};
