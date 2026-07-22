import type { SVGProps } from "react";

export const WineGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36.8302 17.2144C31.4907 19.5629 28.5588 19.5287 24 17.5C19.4234 15.4635 16.4865 15.4368 11.1073 17.8131"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 32V43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M12.1538 5L11.1133 18.0443C10.5133 25.5655 16.455 32 24 32C31.545 32 37.4867 25.5655 36.8867 18.0443L35.8462 5H12.1538Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M15 43H33" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
