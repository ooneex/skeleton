import type { SVGProps } from "react";

export const ObjsGroupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H30V30H2V2ZM4 4V28H28V4H4Z" fill="currentColor" />
      <path d="M7 12V25H20V12H7Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7H25V20H22V12C22 10.8954 21.1046 10 20 10H12V7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
