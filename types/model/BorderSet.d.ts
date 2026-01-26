import { DockLocation } from "../DockLocation.ts";
import { DropInfo } from "../DropInfo.ts";
import { BorderNode } from "./BorderNode.ts";
import { IDraggable } from "./IDraggable.ts";
import { Model } from "./Model.ts";
import { Node } from "./Node.ts";
export declare class BorderSet {
    /** @internal */
    static fromJson(json: any, model: Model): BorderSet;
    /** @internal */
    private borders;
    /** @internal */
    private borderMap;
    /** @internal */
    private layoutHorizontal;
    /** @internal */
    constructor(_model: Model);
    toJson(): import("./IJsonModel.ts").IJsonBorderNode[];
    /** @internal */
    getLayoutHorizontal(): boolean;
    /** @internal */
    getBorders(): BorderNode[];
    /** @internal */
    getBorderMap(): Map<DockLocation, BorderNode>;
    /** @internal */
    forEachNode(fn: (node: Node, level: number) => void): void;
    /** @internal */
    setPaths(): void;
    /** @internal */
    findDropTargetNode(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
}
