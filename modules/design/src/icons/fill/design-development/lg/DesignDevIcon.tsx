import type { SVGProps } from "react";

export const DesignDevIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 23H40.5V26H25.5V23Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 11H20L20 46H46L46 11ZM40 17L26 17L26 40H40L40 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 37V11C17 9.34315 18.3431 8 20 8L28 8V2H2V37H17ZM13.6213 14.9999L11.5 12.8786L4.87868 19.4999L11.5001 26.1213L13.6214 24L9.12132 19.4999L13.6213 14.9999Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
