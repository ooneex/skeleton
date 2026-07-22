import type { SVGProps } from "react";

export const DotsLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
        fill="currentColor"
      />
      <path
        d="M20 14.5C21.3807 14.5 22.5 13.3807 22.5 12C22.5 10.6193 21.3807 9.5 20 9.5C18.6193 9.5 17.5 10.6193 17.5 12C17.5 13.3807 18.6193 14.5 20 14.5Z"
        fill="currentColor"
      />
      <path
        d="M4 14.5C5.38071 14.5 6.5 13.3807 6.5 12C6.5 10.6193 5.38071 9.5 4 9.5C2.61929 9.5 1.5 10.6193 1.5 12C1.5 13.3807 2.61929 14.5 4 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
