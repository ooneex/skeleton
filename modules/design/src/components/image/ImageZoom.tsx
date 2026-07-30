import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { cn } from "@module/design/utils/cn";

type ImageZoomPropsType = { src: string; alt: string; className?: string; width?: number; height?: number };
export const ImageZoom = ({ src, alt, className, width = 800, height = 600 }: ImageZoomPropsType) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Zoom>
        <img
          alt={alt}
          className={cn("max-w-full max-h-full rounded object-contain", className)}
          height={height}
          src={src}
          width={width}
        />
      </Zoom>
    </div>
  );
};
ImageZoom.displayName = "ImageZoom";
