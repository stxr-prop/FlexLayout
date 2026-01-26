import { DockLocation } from "./DockLocation.ts";
import { IDropTarget } from "./model/IDropTarget.ts";
import { Node } from "./model/Node.ts";
import { Rect } from "./Rect.ts";
export declare class DropInfo {
    node: Node & IDropTarget;
    rect: Rect;
    location: DockLocation;
    index: number;
    className: string;
    constructor(node: Node & IDropTarget, rect: Rect, location: DockLocation, index: number, className: string);
}
