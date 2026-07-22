import type { SVGProps } from "react";

export const NailArtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5.91406C19.2724 7.32031 20 9.16472 20 11.1055V23H4V11.1055C4.00002 9.16472 4.72763 7.32031 6 5.91406L6.00684 11.2988C6.15719 14.3655 8.60987 16.8261 11.6738 16.9912C11.8876 17.0106 12.1115 17.0106 12.3252 16.9912C15.4886 16.8213 18 14.2047 18 11V5.91406ZM9 19V21H15V19H9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1.94336V11C16 13.1361 14.3256 14.881 12.2178 14.9941C12.073 15.0003 11.926 15.0004 11.7812 14.9941C9.67384 14.8806 8 13.1357 8 11V1.94336C9.23984 1.32428 10.609 1.00006 12 1C13.3908 1.02295 14.7508 1.3196 16 1.94336Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
