import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { cn } from "@module/design/utils/cn";

type ImageZoomPropsType = { src: string; alt: string; className?: string };
export const ImageZoom = ({ src, alt, className }: ImageZoomPropsType) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Zoom>
        <img src={src} alt={alt} className={cn("max-w-full max-h-full rounded object-contain", className)} />
      </Zoom>
    </div>
  );
};
ImageZoom.displayName = "ImageZoom";
