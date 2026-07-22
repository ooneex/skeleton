import { Label } from "@module/design/components/label/Label";
import { cn } from "@module/design/utils/cn";
import { type FC, isValidElement, type ReactNode, type SVGProps } from "react";
export type FormRowPropsType = {
  icon?: FC<SVGProps<SVGSVGElement>> | ReactNode;
  label?: string;
  children: ReactNode;
  className?: string;
};
export const FormRow = ({ icon, label, children, className }: FormRowPropsType) => (
  <div className={cn("flex items-start gap-3", className)}>
    {icon !== undefined && (
      <div className="flex items-center justify-center size-8 rounded bg-muted shrink-0 mt-1">
        {isValidElement(icon)
          ? icon
          : (() => {
              const Icon = icon as FC<SVGProps<SVGSVGElement>>;
              return <Icon className="size-4 text-muted-foreground" />;
            })()}
      </div>
    )}
    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
      {label !== undefined && <Label className="text-muted-foreground">{label}</Label>}
      <div className="text-sm">{children}</div>
    </div>
  </div>
);

FormRow.displayName = "FormRow";
