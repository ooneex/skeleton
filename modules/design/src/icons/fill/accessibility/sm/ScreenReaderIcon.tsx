import type { SVGProps } from "react";

export const ScreenReaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="11.723 13 7 13 7 20 11.723 20 18 23.766 18 9.234 11.723 13"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m5,21h-1c-1.654,0-3-1.346-3-3V6c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v3.5h-2v-3.5c0-.551-.448-1-1-1H4c-.552,0-1,.449-1,1v12c0,.551.448,1,1,1h1v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m20.801,21.901l-1.201-1.599.8-.601c1.018-.764,1.601-1.931,1.601-3.201s-.583-2.437-1.601-3.201l-.8-.601,1.201-1.599.8.601c1.524,1.145,2.399,2.895,2.399,4.8s-.875,3.655-2.399,4.8l-.8.601Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
