import type { SVGProps } from "react";

export const FocusModeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="16" cy="16" r="6" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m9.365,29.493l-.865-.5c-4.626-2.676-7.5-7.654-7.5-12.993S3.874,5.683,8.5,3.007l.865-.5,1.001,1.731-.866.501c-4.01,2.319-6.5,6.634-6.5,11.261s2.491,8.942,6.5,11.261l.866.501-1.001,1.731Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m22.635,29.493l-1.001-1.731.866-.501c4.01-2.319,6.5-6.634,6.5-11.261s-2.491-8.942-6.5-11.261l-.866-.501,1.001-1.731.865.5c4.626,2.676,7.5,7.654,7.5,12.993s-2.874,10.317-7.5,12.993l-.865.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
