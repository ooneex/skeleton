import type { SVGProps } from "react";

export const UserPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,24c-5.333,0-11-1.752-11-5,0-1.748,1.648-3.214,4.641-4.131l.956-.293.586,1.913-.956.292c-2.229.683-3.227,1.606-3.227,2.219,0,1.223,3.506,3,9,3s9-1.777,9-3c0-.612-.998-1.536-3.227-2.219l-.956-.292.586-1.913.956.293c2.992.917,4.641,2.383,4.641,4.131,0,3.248-5.667,5-11,5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="12" cy="2.5" r="2.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m16.066,8.233c-.112-.563-.453-1.048-.936-1.33-2.047-1.195-4.214-1.195-6.263,0-.481.281-.822.766-.935,1.329l-1.063,5.32,2.189,1.095.535,5.352h4.811l.535-5.352,2.189-1.095-1.063-5.32Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
