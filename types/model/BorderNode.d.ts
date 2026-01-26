import { AttributeDefinitions } from "../AttributeDefinitions.ts";
import { DockLocation } from "../DockLocation.ts";
import { DropInfo } from "../DropInfo.ts";
import { Orientation } from "../Orientation.ts";
import { Rect } from "../Rect.ts";
import { IDraggable } from "./IDraggable.ts";
import { IDropTarget } from "./IDropTarget.ts";
import { IJsonBorderNode } from "./IJsonModel.ts";
import { Model } from "./Model.ts";
import { Node } from "./Node.ts";
import { TabNode } from "./TabNode.ts";
export declare class BorderNode extends Node implements IDropTarget {
    static readonly TYPE = "border";
    /** @internal */
    static fromJson(json: any, model: Model): BorderNode;
    /** @internal */
    private static attributeDefinitions;
    /** @internal */
    private contentRect;
    /** @internal */
    private tabHeaderRect;
    /** @internal */
    private location;
    /** @internal */
    constructor(location: DockLocation, json: any, model: Model);
    getLocation(): DockLocation;
    getClassName(): string | undefined;
    isHorizontal(): boolean;
    getSize(): any;
    getMinSize(): number;
    getMaxSize(): number;
    getSelected(): number;
    isAutoHide(): boolean;
    getSelectedNode(): TabNode | undefined;
    getOrientation(): Orientation;
    /**
     * Returns the config attribute that can be used to store node specific data that
     * WILL be saved to the json. The config attribute should be changed via the action Actions.updateNodeAttributes rather
     * than directly, for example:
     * this.state.model.doAction(
     *   FlexLayout.Actions.updateNodeAttributes(node.getId(), {config:myConfigObject}));
     */
    getConfig(): any;
    isMaximized(): boolean;
    isShowing(): boolean;
    toJson(): IJsonBorderNode;
    /** @internal */
    isAutoSelectTab(whenOpen?: boolean): boolean;
    isEnableTabScrollbar(): boolean;
    /** @internal */
    setSelected(index: number): void;
    /** @internal */
    getTabHeaderRect(): Rect;
    /** @internal */
    setTabHeaderRect(r: Rect): void;
    /** @internal */
    getRect(): Rect;
    /** @internal */
    getContentRect(): Rect;
    /** @internal */
    setContentRect(r: Rect): void;
    /** @internal */
    isEnableDrop(): boolean;
    /** @internal */
    setSize(pos: number): void;
    /** @internal */
    updateAttrs(json: any): void;
    /** @internal */
    remove(node: TabNode): void;
    /** @internal */
    canDrop(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
    /** @internal */
    drop(dragNode: Node & IDraggable, location: DockLocation, index: number, select?: boolean): void;
    /** @internal */
    getSplitterBounds(index: number, useMinSize?: boolean): number[];
    /** @internal */
    calculateSplit(splitter: BorderNode, splitterPos: number): number;
    /** @internal */
    getAttributeDefinitions(): AttributeDefinitions;
    /** @internal */
    static getAttributeDefinitions(): AttributeDefinitions;
    /** @internal */
    private static createAttributeDefinitions;
}
