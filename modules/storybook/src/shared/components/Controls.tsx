import { getRouteApi } from "@tanstack/react-router";
import { type ChangeEvent, type ReactElement, useEffect, useSyncExternalStore } from "react";
import type { StoryTabType } from "../../routes/index";
import { ChevronDownIcon } from "../icons/outline/arrows/sm/ChevronDownIcon";
import { LightbulbIcon } from "../icons/outline/business-finance/sm/LightbulbIcon";
import { MonitorIcon } from "../icons/outline/design-development/sm/MonitorIcon";
import { ChalkboardIcon } from "../icons/outline/school-education/sm/ChalkboardIcon";
import { Markdown } from "../markdown/Markdown";
import {
  clearActions,
  getActions,
  type LoadedControlType,
  type LoadedVariantType,
  subscribeActions,
} from "../story";
import { cn } from "../utils/cn";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";
import { Select } from "./select";
import { Tabs } from "./tabs";

const renderControl = (
  control: LoadedControlType,
  value: unknown,
  onChange: (name: string, value: unknown) => void,
): ReactElement => {
  const id = `control-${control.name}`;
  const options = control.options ?? [];

  switch (control.control) {
    case "boolean":
      return (
        <Checkbox
          id={id}
          size="xs"
          checked={value === true}
          onCheckedChange={(checked) => onChange(control.name, checked === true)}
        />
      );
    case "number":
      return (
        <Input
          id={id}
          size="xs"
          type="number"
          value={typeof value === "number" ? value : ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(control.name, event.target.valueAsNumber)}
        />
      );
    case "color":
      return (
        <Input
          id={id}
          size="xs"
          type="color"
          value={typeof value === "string" ? value : "#000000"}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(control.name, event.target.value)}
          className="h-8 w-16 p-1"
        />
      );
    case "radio":
      return (
        <div className="flex flex-wrap gap-3">
          {options.map((option) => (
            <label key={option.name} className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name={id}
                checked={value === option.name}
                onChange={() => onChange(control.name, option.name)}
              />
              {option.name}
            </label>
          ))}
        </div>
      );
    case "select": {
      const current = typeof value === "string" ? value : "";
      return (
        <Select value={current} onValueChange={(next) => onChange(control.name, next ?? "")}>
          <Select.Trigger size="xs" className="w-full">
            <span className="truncate">{current || "—"}</span>
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.name} size="xs" value={option.name}>
                {option.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      );
    }
    default:
      return (
        <Input
          id={id}
          size="xs"
          type="text"
          value={typeof value === "string" ? value : ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(control.name, event.target.value)}
        />
      );
  }
};

const getControlUsage = (control: LoadedControlType, value: unknown): string | undefined =>
  control.options?.find((option) => option.name === value)?.usage;

const formatArg = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  if (value === null || value === undefined) {
    return String(value);
  }
  if (typeof value === "function") {
    return `[Function ${value.name || "anonymous"}]`;
  }
  if (typeof value === "object") {
    if (typeof Event !== "undefined" && value instanceof Event) {
      return `[${value.constructor.name} ${value.type}]`;
    }
    if ("nativeEvent" in value && "type" in value) {
      return `[SyntheticEvent ${String((value as { type: unknown }).type)}]`;
    }
  }
  try {
    const seen = new WeakSet();
    const json = JSON.stringify(value, (_key, val) => {
      if (typeof val === "object" && val !== null) {
        if (seen.has(val)) {
          return "[Circular]";
        }
        seen.add(val);
      }
      return val;
    });
    if (json !== undefined) {
      return json;
    }
  } catch {
    // fall through to a readable label below
  }
  return Object.prototype.toString.call(value);
};

const formatTime = (time: number): string => new Date(time).toLocaleTimeString();

const route = getRouteApi("/");

type ControlsPropsType = {
  variant: LoadedVariantType;
  args: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  onReset: () => void;
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
};

export const Controls = ({ variant, args, onChange, onReset, collapsed, onCollapsedChange }: ControlsPropsType) => {
  const { controls, usage } = variant;
  const entries = useSyncExternalStore(subscribeActions, getActions);
  const { tab } = route.useSearch();
  const navigate = route.useNavigate();

  useEffect(() => {
    clearActions();
  }, [variant.id]);

  const setTab = (value: StoryTabType): void => {
    navigate({ search: (prev) => ({ ...prev, tab: value === "controls" ? undefined : value }) });
  };

  return (
    <aside className="flex shrink-0 flex-col border-t border-border">
      <Tabs
        value={tab ?? "controls"}
        onValueChange={(value) => setTab(value as StoryTabType)}
        className="flex min-h-0 flex-col gap-0"
      >
        <div className="flex items-center justify-between px-4 pt-2 pb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-xs"
              aria-expanded={!collapsed}
              aria-label={collapsed ? "Expand panel" : "Collapse panel"}
              title={collapsed ? "Expand panel" : "Collapse panel"}
              onClick={() => onCollapsedChange(!collapsed)}
            >
              <ChevronDownIcon className={cn("transition-transform duration-300", collapsed && "rotate-180")} />
            </Button>
            <Tabs.List size="xs">
              <Tabs.Trigger value="controls">
                <MonitorIcon />
                Controls
              </Tabs.Trigger>
              <Tabs.Trigger value="usage">
                <LightbulbIcon />
                Usage
              </Tabs.Trigger>
              <Tabs.Trigger value="logs">
                <ChalkboardIcon />
                Logs
                {entries.length > 0 ? <Tabs.Badge variant="info">{entries.length}</Tabs.Badge> : null}
              </Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
          </div>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              onReset();
              clearActions();
            }}
          >
            Reset
          </Button>
        </div>

        <div
          className={cn(
            "flex min-h-0 flex-col overflow-hidden transition-[height] duration-300 ease-out",
            collapsed ? "h-0" : "h-72",
          )}
        >
          <Tabs.Content value="controls" className="min-h-0 flex-1">
            <ScrollArea className="h-full" viewportClassName="p-4">
              {controls.length === 0 ? (
                <p className="text-sm text-muted-foreground">This variant has no editable props.</p>
              ) : (
                <div className="grid gap-3">
                  {controls.map((control) => {
                    const controlUsage = getControlUsage(control, args[control.name]);
                    return (
                      <div key={control.name} className="grid grid-cols-[8rem_1fr] items-center gap-3">
                        <label htmlFor={`control-${control.name}`} className="pt-1 text-sm text-muted-foreground">
                          {control.name}
                        </label>
                        <div className="grid gap-1">
                          {renderControl(control, args[control.name], onChange)}
                          {controlUsage ? (
                            <Markdown content={controlUsage} className="text-xs text-muted-foreground" />
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content value="usage" className="min-h-0 flex-1">
            <ScrollArea className="h-full" viewportClassName="p-4">
              {usage ? (
                <Markdown content={usage} className="text-xs" />
              ) : (
                <p className="text-sm text-muted-foreground">No usage guidance for this variant.</p>
              )}
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content value="logs" className="min-h-0 flex-1">
            <ScrollArea className="h-full" viewportClassName="p-4">
              {entries.length === 0 ? (
                <p className="text-sm text-muted-foreground/50">Callback invocations will appear here.</p>
              ) : (
                <ul className="flex flex-col gap-1">
                  {entries.map((entry) => {
                    const detail = entry.args.map(formatArg).join(", ");
                    return (
                      <li key={entry.id} className="flex items-baseline gap-2 font-mono text-xs">
                        <span className="text-muted-foreground tabular-nums">{formatTime(entry.time)}</span>
                        <span className="font-semibold text-foreground">{entry.name}</span>
                        {detail ? <span className="truncate text-muted-foreground">{detail}</span> : null}
                      </li>
                    );
                  })}
                </ul>
              )}
            </ScrollArea>
          </Tabs.Content>
        </div>
      </Tabs>
    </aside>
  );
};
