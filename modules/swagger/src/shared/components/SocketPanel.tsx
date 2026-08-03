import { Badge } from "@module/design/components/badge";
import { Button } from "@module/design/components/button";
import { Label } from "@module/design/components/label";
import { Textarea } from "@module/design/components/textarea";
import { Socket } from "@talosjs/socket-client";
import { useEffect, useId, useRef, useState } from "react";
import type { SocketFrameType } from "../route";
import { frameStamp } from "../route";
import { cn } from "../utils/cn";
import { formatJson, isValidJson } from "../utils/json";

type SocketPanelPropsType = {
  url: string;
  /** Seeds the composer, so a route is sendable before anything is typed. */
  example?: unknown;
  /** Set when the route cannot be run at all — no origin, missing variable, … */
  blocked?: string;
};

type StatusType = "idle" | "connecting" | "open" | "closed";

const STATUS_LABEL: Record<StatusType, string> = {
  idle: "Not connected",
  connecting: "Connecting…",
  open: "Connected",
  closed: "Closed",
};

const STATUS_VARIANT: Record<StatusType, "neutral" | "warning" | "success" | "danger"> = {
  idle: "neutral",
  connecting: "warning",
  open: "success",
  closed: "danger",
};

/**
 * The executable half of a WebSocket route.
 *
 * A socket is not one request and one response, so it gets its own panel: the
 * connection is opened and closed explicitly, the same composer can be sent
 * many times over it, and everything that crosses the wire is appended to a
 * log rather than replacing a single result.
 */
export const SocketPanel = ({ url, example, blocked }: SocketPanelPropsType) => {
  const id = useId();
  const [status, setStatus] = useState<StatusType>("idle");
  const [payload, setPayload] = useState<string>(() => formatJson(example ?? {}));
  const [frames, setFrames] = useState<SocketFrameType[]>([]);
  const socket = useRef<Socket>(undefined);

  // A connection outlives a render; closing it on unmount is what keeps a
  // dropped panel from holding the server's side open.
  useEffect(() => () => socket.current?.close(), []);

  const log = (direction: SocketFrameType["direction"], data: unknown): void => {
    setFrames((previous) => [...previous, { direction, at: frameStamp(new Date()), data }]);
  };

  const connect = (): void => {
    setFrames([]);
    setStatus("connecting");

    const next = new Socket(url);
    socket.current = next;

    next.onOpen(() => {
      setStatus("open");
      log("system", `Connected to ${url}`);
    });
    next.onMessage((response) => log("received", response));
    next.onError((_event, response) => log("system", response ?? "The connection reported an error."));
    next.onClose((event) => {
      setStatus("closed");
      log("system", `Closed (${event.code}${event.reason ? `: ${event.reason}` : ""})`);
    });
  };

  const disconnect = (): void => {
    socket.current?.close();
    socket.current = undefined;
    setStatus("closed");
  };

  const send = (): void => {
    const parsed = JSON.parse(payload === "" ? "{}" : payload) as Record<string, unknown>;
    socket.current?.send({ payload: parsed });
    log("sent", parsed);
  };

  const valid = isValidJson(payload);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-wrap items-center gap-3">
        <Badge size="sm" variant={STATUS_VARIANT[status]}>
          {STATUS_LABEL[status]}
        </Badge>
        {status === "open" ? (
          <Button size="sm" variant="outline" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          <Button size="sm" disabled={Boolean(blocked) || status === "connecting"} onClick={connect}>
            Connect
          </Button>
        )}
        {blocked ? <span className="text-xs text-muted-foreground">{blocked}</span> : null}
        <span className="truncate font-mono text-2xs text-muted-foreground">{url}</span>
      </section>

      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor={`${id}-payload`} className="text-xs font-medium uppercase tracking-wide">
            Message
          </Label>
          {valid ? null : <span className="text-xs text-destructive">Not valid JSON</span>}
        </div>
        <Textarea
          id={`${id}-payload`}
          value={payload}
          aria-invalid={!valid}
          spellCheck={false}
          rows={6}
          className="font-mono text-xs"
          onChange={(event) => setPayload(event.target.value)}
        />
        <div>
          <Button size="sm" disabled={status !== "open" || !valid} onClick={send}>
            Send message
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Exchange{frames.length > 0 ? ` · ${frames.length}` : ""}
        </h3>
        {frames.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing yet — connect to start the exchange.</p>
        ) : (
          <div className="flex max-h-96 flex-col gap-1 overflow-auto rounded border border-border bg-muted/40 p-2">
            {frames.map((frame, index) => (
              // The log is append-only, so the position is a stable identity.
              <div key={`${id}-frame-${index}`} className="flex gap-2 font-mono text-2xs">
                <span className="shrink-0 text-muted-foreground">{frame.at}</span>
                <span
                  className={cn(
                    "w-16 shrink-0 uppercase",
                    frame.direction === "sent" && "text-primary",
                    frame.direction === "received" && "text-success-700",
                    frame.direction === "system" && "text-muted-foreground",
                  )}
                >
                  {frame.direction}
                </span>
                <pre className="min-w-0 flex-1 whitespace-pre-wrap break-all">{formatJson(frame.data)}</pre>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
