import { AttributeDefinitions } from "../AttributeDefinitions.ts";
import { DockLocation } from "../DockLocation.ts";
import { DropInfo } from "../DropInfo.ts";
import { Orientation } from "../Orientation.ts";
import { IDraggable } from "./IDraggable.ts";
import { IDropTarget } from "./IDropTarget.ts";
import { IJsonRowNode } from "./IJsonModel.ts";
import { Model } from "./Model.ts";
import { Node } from "./Node.ts";
import { LayoutWindow } from "./LayoutWindow.ts";
export declare class RowNode extends Node implements IDropTarget {
    static readonly TYPE = "row";
    /** @internal */
    static fromJson(json: any, model: Model, layoutWindow: LayoutWindow): RowNode;
    /** @internal */
    private static attributeDefinitions;
    /** @internal */
    private windowId;
    /** @internal */
    private minHeight;
    /** @internal */
    private minWidth;
    /** @internal */
    private maxHeight;
    /** @internal */
    private maxWidth;
    /** @internal */
    constructor(model: Model, windowId: string, json: any);
    getWeight(): number;
    toJson(): IJsonRowNode;
    /** @internal */
    getWindowId(): string;
    setWindowId(windowId: string): void;
    /** @internal */
    setWeight(weight: number): void;
    /** @internal */
    getSplitterBounds(index: number): number[];
    /** @internal */
    getSplitterInitials(index: number): {
        initialSizes: number[];
        sum: number;
        startPosition: number;
    };
    /** @internal */
    calculateSplit(index: number, splitterPos: number, initialSizes: number[], sum: number, startPosition: number): number[];
    /** @internal */
    getMinSize(orientation: Orientation): number;
    /** @internal */
    getMinWidth(): number;
    /** @internal */
    getMinHeight(): number;
    /** @internal */
    getMaxSize(orientation: Orientation): number;
    /** @internal */
    getMaxWidth(): number;
    /** @internal */
    getMaxHeight(): number;
    /** @internal */
    calcMinMaxSize(): void;
    /** @internal */
    tidy(): void;
    /** @internal */
    canDrop(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
    /** @internal */
    drop(dragNode: Node, location: DockLocation, index: number): void;
    /** @internal */
    isEnableDrop(): boolean;
    /** @internal */
    getAttributeDefinitions(): AttributeDefinitions;
    /** @internal */
    updateAttrs(json: any): void;
    /** @internal */
    static getAttributeDefinitions(): AttributeDefinitions;
    normalizeWeights(): void;
    /** @internal */
    private static createAttributeDefinitions;
}
