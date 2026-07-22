import type { SVGProps } from "react";

export const SkirtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 2V5H5V2H11Z" fill="currentColor" data-color="color-2" />
      <path d="M19 5H13V2H19V5Z" fill="currentColor" data-color="color-2" />
      <path
        d="M23.1768 18.0039L22.627 18.4463C19.7788 20.738 15.954 22 12 22C8.04595 22 4.22122 20.738 1.37305 18.4463L0.823242 18.0039L4.66602 7H19.334L23.1768 18.0039ZM6.76953 19.1367C7.39368 19.3516 8.03949 19.5268 8.70117 19.6631L10.1875 12.7314L8.23145 12.3125L6.76953 19.1367ZM13.8125 12.7314L15.2979 19.6631C15.9595 19.5269 16.6053 19.3515 17.2295 19.1367L15.7686 12.3125L13.8125 12.7314Z"
        fill="currentColor"
      />
    </svg>
  );
};
