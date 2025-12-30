import { DockLocation } from "../DockLocation.ts";
import { DropInfo } from "../DropInfo.ts";
import { IDraggable } from "./IDraggable.ts";
import { Node } from "./Node.ts";

export interface IDropTarget {
    /** @internal */
    canDrop(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
    /** @internal */
    drop(dragNode: Node & IDraggable, location: DockLocation, index: number, select?: boolean): void;
    /** @internal */
    isEnableDrop(): boolean;
}

