import type { SVGProps } from "react";

export const FolderChartBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 12V22H17V12H19Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 15V22H21V15H23Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 17V22H13V17H15Z" fill="currentColor" data-color="color-2" />
      <path
        d="M1 5C1 3.34315 2.34315 2 4 2H10.4142L13.4142 5H20C21.6569 5 23 6.34315 23 8V13H21V12C21 10.8954 20.1046 10 19 10H17C15.8954 10 15 10.8954 15 12V15H13C11.8954 15 11 15.8954 11 17V21H4C2.34315 21 1 19.6569 1 18V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
