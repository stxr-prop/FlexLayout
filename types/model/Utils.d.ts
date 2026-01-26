import { TabSetNode } from "./TabSetNode.ts";
import { BorderNode } from "./BorderNode.ts";
import { RowNode } from "./RowNode.ts";
import { TabNode } from "./TabNode.ts";
/** @internal */
export declare function adjustSelectedIndexAfterDock(node: TabNode): void;
/** @internal */
export declare function adjustSelectedIndex(parent: TabSetNode | BorderNode | RowNode, removedIndex: number): void;
export declare function randomUUID(): string;
