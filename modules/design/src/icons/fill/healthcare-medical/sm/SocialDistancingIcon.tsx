import type { SVGProps } from "react";

export const SocialDistancingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m4.672,21.414c-.781-.781-.781-2.047,0-2.828l3.914-3.914c.391-.391.902-.586,1.414-.586s1.023.195,1.414.586l.054.054-.812-4.871c-.171-1.024-.858-1.897-1.795-2.277-.949-.385-1.905-.578-2.861-.578s-1.912.193-2.861.578c-.937.38-1.624,1.252-1.795,2.277l-.951,5.709,2.107,1.054.5,6.382h3.258l-1.586-1.586Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m19.328,21.414c.781-.781.781-2.047,0-2.828l-3.914-3.914c-.391-.391-.902-.586-1.414-.586s-1.023.195-1.414.586l-.054.054.812-4.871c.171-1.024.858-1.897,1.795-2.277.949-.385,1.905-.578,2.861-.578s1.912.193,2.861.578c.937.38,1.624,1.252,1.795,2.277l.951,5.709-2.107,1.054-.5,6.382h-3s-.258,0-.258,0l1.586-1.586Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="6" cy="3.5" r="2.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="18" cy="3.5" r="2.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon
        points="13.998 16.086 12.584 17.5 14.084 19 9.914 19 11.414 17.5 10 16.086 6.086 20 10 23.914 11.414 22.5 9.914 21 14.084 21 12.584 22.5 13.998 23.914 17.912 20 13.998 16.086"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
