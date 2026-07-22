import type { SVGProps } from "react";

export const AccessibilityIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10H15.5371L16.0107 22.9629L14.0117 23.0361L13.7549 16H10.2314L9.96094 23.0381L7.96191 22.9609L8.46094 10H2V8H22V10Z"
        fill="currentColor"
      />
      <path
        d="M12 6.5C13.3807 6.5 14.5 5.38071 14.5 4C14.5 2.61929 13.3807 1.5 12 1.5C10.6193 1.5 9.5 2.61929 9.5 4C9.5 5.38071 10.6193 6.5 12 6.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
