import type { SVGProps } from "react";

export const FolderVolumeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11.1315V23.8685L15.6972 21H14C12.8954 21 12 20.1046 12 19V16C12 14.8954 12.8954 14 14 14H15.6972L20 11.1315Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M24 14V21H22V14H24Z" fill="currentColor" data-color="color-2" />
      <path
        d="M1 5C1 3.34315 2.34315 2 4 2H10.4142L13.4142 5H20C21.6569 5 23 6.34315 23 8V12H22V11.1315C22 10.3939 21.594 9.71616 20.9437 9.36812C20.2934 9.02008 19.5043 9.05823 18.8906 9.46737L15.0917 12H14C11.7909 12 10 13.7908 10 16V19C10 19.7286 10.1948 20.4116 10.5351 21H4C2.34315 21 1 19.6569 1 18V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
