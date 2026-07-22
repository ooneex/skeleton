import type { SVGProps } from "react";

export const BoltSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19.6258 0.167236L18.6817 12.1764H20L12.3742 19.8235H1.73787L19.6258 0.167236Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.4142 4.00003L4 29.4142L2.58579 28L28 2.58582L29.4142 4.00003Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M13.0537 23.1889L12.3742 31.8326L30.2621 12.1764H24.0663L13.0537 23.1889Z" fill="currentColor" />
    </svg>
  );
};
