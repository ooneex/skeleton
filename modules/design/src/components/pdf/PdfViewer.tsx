import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

import { Empty } from "@module/design/components/empty/Empty";
import { EmptyDescription } from "@module/design/components/empty/EmptyDescription";
import { EmptyHeader } from "@module/design/components/empty/EmptyHeader";
import { EmptyMedia } from "@module/design/components/empty/EmptyMedia";
import { EmptyTitle } from "@module/design/components/empty/EmptyTitle";
import { BookIcon } from "@module/design/icons/outline/school-education/sm/BookIcon";
import { cn } from "@module/design/utils/cn";
import {
  type LocalizationMap,
  type PageChangeEvent,
  type PageLayout,
  type RenderPageProps,
  SpecialZoomLevel,
  Viewer,
  ViewMode,
  Worker,
} from "@react-pdf-viewer/core";
import type { ToolbarSlot } from "@react-pdf-viewer/default-layout";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { useCallback, useEffect, useRef } from "react";

const renderError = () => {
  return (
    <Empty className="h-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BookIcon />
        </EmptyMedia>
        <EmptyTitle>Failed to load PDF</EmptyTitle>
        <EmptyDescription>The document could not be loaded. Please check the URL and try again.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

const renderPage = (props: RenderPageProps) => {
  return (
    <>
      {props.canvasLayer.children}
      <div
        style={
          {
            //   userSelect: 'none',
          }
        }
      >
        {props.textLayer.children}
      </div>
      {props.annotationLayer.children}
    </>
  );
};

type TextSelectionType = {
  text: string;
  page: number;
};

type PdfViewerPropsType = {
  src: string;
  toolbar?: boolean;
  initialPage?: number;
  page?: number;
  locale?: LocalizationMap;
  className?: string;
  render?: () => { endPage: number; startPage: number };
  onTextSelect?: (selection: TextSelectionType) => void;
};

export const PdfViewer = ({
  src,
  toolbar = false,
  initialPage = 0,
  page,
  locale,
  className,
  render,
  onTextSelect,
}: PdfViewerPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentPageRef = useRef(initialPage);
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage } = pageNavigationPluginInstance;

  useEffect(() => {
    if (page !== undefined && page >= 1) {
      jumpToPage(page - 1);
    }
  }, [page, jumpToPage]);

  const handlePageChange = useCallback((e: PageChangeEvent) => {
    currentPageRef.current = e.currentPage;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!onTextSelect) return;

    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (selectedText) {
      onTextSelect({
        text: selectedText,
        page: currentPageRef.current + 1,
      });
    }
  }, [onTextSelect]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !onTextSelect) return;

    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp, onTextSelect]);

  const pageLayout: PageLayout = {
    transformSize: ({ size }) => ({
      height: size.height + 10,
      width: size.width + 10,
    }),
  };

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full relative bg-light rounded", toolbar ? "pt-14" : "pt-0", className)}
    >
      {toolbar ? (
        <div className="justify-center w-fit m-auto rounded-md absolute top-2 left-0 right-0 z-50 hidden md:flex">
          <Toolbar>
            {(slots: ToolbarSlot) => {
              const {
                CurrentPageInput,
                EnterFullScreen,
                GoToNextPage,
                GoToPreviousPage,
                NumberOfPages,
                ShowSearchPopover,
                Zoom,
                ZoomIn,
                ZoomOut,
                SwitchViewMode,
              } = slots;
              return (
                <div className="pdf-toolbar flex items-center gap-1 px-2 py-1.5 w-fit rounded-md bg-transparent">
                  <div>
                    <ShowSearchPopover />
                  </div>
                  <div className="h-5 w-px bg-primary-200 mx-0.5" />
                  <div>
                    <ZoomOut />
                  </div>
                  <div>
                    <Zoom />
                  </div>
                  <div>
                    <ZoomIn />
                  </div>
                  <div className="h-5 w-px bg-primary-200 mx-0.5" />
                  <div>
                    <GoToPreviousPage />
                  </div>
                  <div className="flex items-center gap-1">
                    <CurrentPageInput />
                    <NumberOfPages />
                  </div>
                  <div>
                    <GoToNextPage />
                  </div>
                  <div className="h-5 w-px bg-primary-200 mx-0.5" />
                  <div>
                    <EnterFullScreen />
                  </div>
                  <div className="h-5 w-px bg-primary-200 mx-0.5" />
                  <div>
                    <SwitchViewMode mode={ViewMode.DualPage} />
                  </div>
                  <div>
                    <SwitchViewMode mode={ViewMode.SinglePage} />
                  </div>
                </div>
              );
            }}
          </Toolbar>
        </div>
      ) : null}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl={src}
          initialPage={initialPage}
          defaultScale={SpecialZoomLevel.PageWidth}
          enableSmoothScroll
          plugins={[toolbarPluginInstance, pageNavigationPluginInstance]}
          pageLayout={pageLayout}
          renderPage={renderPage}
          renderError={renderError}
          setRenderRange={render}
          onPageChange={handlePageChange}
          localization={locale}
        />
      </Worker>
    </div>
  );
};
PdfViewer.displayName = "PdfViewer";
