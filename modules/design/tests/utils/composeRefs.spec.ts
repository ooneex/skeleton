import { describe, expect, test } from "bun:test";
import type { RefObject } from "react";
import { composeRefs } from "../../src/utils/composeRefs";

type NodeType = { id: string };

describe("composeRefs", () => {
  test("should forward the node to callback refs and object refs alike", () => {
    const seen: Array<NodeType | null> = [];
    const objectRef: RefObject<NodeType | null> = { current: null };
    const node: NodeType = { id: "root" };

    composeRefs<NodeType>((value) => {
      seen.push(value);
    }, objectRef)(node);

    expect(seen).toEqual([node]);
    expect(objectRef.current).toBe(node);
  });

  test("should propagate an unmount by assigning null everywhere", () => {
    const seen: Array<NodeType | null> = [];
    const objectRef: RefObject<NodeType | null> = { current: { id: "root" } };

    composeRefs<NodeType>((value) => {
      seen.push(value);
    }, objectRef)(null);

    expect(seen).toEqual([null]);
    expect(objectRef.current).toBeNull();
  });

  test("should ignore null and undefined refs", () => {
    const objectRef: RefObject<NodeType | null> = { current: null };
    const node: NodeType = { id: "root" };

    expect(() => composeRefs<NodeType>(null, undefined, objectRef)(node)).not.toThrow();
    expect(objectRef.current).toBe(node);
  });
});
