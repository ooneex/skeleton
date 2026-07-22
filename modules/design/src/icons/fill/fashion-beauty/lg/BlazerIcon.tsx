import type { SVGProps } from "react";

export const BlazerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.31641 11.6582C6.69664 12.8977 7.00678 14.4008 8.06641 15.2939L20.1123 25.4482L17 28.0693V44H4V12C4 8.68629 6.68629 6 10 6H10.1455L7.31641 11.6582Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 13L23.9941 24.7959L10 13L15.5 2H32.5L38 13ZM24.0098 23.4561L31.3877 5H16.6357L24.0098 23.4561Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 6C41.3137 6 44 8.68629 44 12V44H20V29.4648L22.4736 27.3809C23.5536 28.017 24.9406 27.9213 25.9268 27.0908L39.9326 15.2949C40.993 14.4019 41.3036 12.8982 40.6836 11.6582L37.8545 6H38ZM23 37V40H27V37H23ZM23 34H27V31H23V34Z"
        fill="currentColor"
      />
    </svg>
  );
};
