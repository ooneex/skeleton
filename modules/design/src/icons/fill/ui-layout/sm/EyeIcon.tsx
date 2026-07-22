import type { SVGProps } from "react";

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="10" r="5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m12,20C4.496,20,.435,12.79.266,12.483l-.266-.483.266-.483c.169-.307,4.23-7.517,11.734-7.517s11.565,7.21,11.735,7.517l.266.483-.266.483c-.17.307-4.231,7.517-11.735,7.517ZM2.318,12c.993,1.505,4.401,6,9.682,6s8.689-4.495,9.683-6c-.993-1.505-4.403-6-9.683-6S3.312,10.495,2.318,12Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
