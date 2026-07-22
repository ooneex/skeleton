import type { SVGProps } from "react";

export const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 30L20.116 43.5224C20.6461 45.0081 22.0531 46 23.6306 46C25.7433 46 27.4347 44.2475 27.3598 42.1361L27 32L40.3242 32C43.0903 32 45.0215 29.2596 44.0911 26.6546L37.3109 7.67046C36.5402 5.51256 34.4013 4.15471 32.1206 4.37542L15 6.03224V30Z"
        fill="currentColor"
      />
      <path d="M12 30V6.32256L5 6.99998V30L12 30Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
