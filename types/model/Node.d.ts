import { AttributeDefinitions } from "../AttributeDefinitions.ts";
import { DropInfo } from "../DropInfo.ts";
import { Orientation } from "../Orientation.ts";
import { Rect } from "../Rect.ts";
import { IDraggable } from "./IDraggable.ts";
import { IJsonBorderNode, IJsonRowNode, IJsonTabNode, IJsonTabSetNode } from "./IJsonModel.ts";
import { Model } from "./Model.ts";
export declare abstract class Node {
    /** @internal */
    protected model: Model;
    /** @internal */
    protected attributes: Record<string, any>;
    /** @internal */
    protected parent?: Node;
    /** @internal */
    protected children: Node[];
    /** @internal */
    protected rect: Rect;
    /** @internal */
    protected path: string;
    /** @internal */
    protected listeners: Map<string, (params: any) => void>;
    /** @internal */
    protected constructor(_model: Model);
    getId(): string;
    getModel(): Model;
    getType(): string;
    getParent(): Node | undefined;
    getChildren(): Node[];
    getRect(): Rect;
    getPath(): string;
    getOrientation(): Orientation;
    setEventListener(event: string, callback: (params: any) => void): void;
    removeEventListener(event: string): void;
    abstract toJson(): IJsonRowNode | IJsonBorderNode | IJsonTabSetNode | IJsonTabNode | undefined;
    /** @internal */
    setId(id: string): void;
    /** @internal */
    fireEvent(event: string, params: any): void;
    /** @internal */
    getAttr(name: string): any;
    /** @internal */
    forEachNode(fn: (node: Node, level: number) => void, level: number): void;
    /** @internal */
    setPaths(path: string): void;
    /** @internal */
    setParent(parent: Node): void;
    /** @internal */
    setRect(rect: Rect): void;
    /** @internal */
    setPath(path: string): void;
    /** @internal */
    setWeight(weight: number): void;
    /** @internal */
    setSelected(index: number): void;
    /** @internal */
    findDropTargetNode(windowId: string, dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
    /** @internal */
    canDrop(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined;
    /** @internal */
    canDockInto(dragNode: Node & IDraggable, dropInfo: DropInfo | undefined): boolean;
    /** @internal */
    removeChild(childNode: Node): number;
    /** @internal */
    addChild(childNode: Node, pos?: number): number;
    /** @internal */
    removeAll(): void;
    /** @internal */
    styleWithPosition(style?: Record<string, any>): Record<string, any>;
    /** @internal */
    isEnableDivide(): boolean;
    /** @internal */
    toAttributeString(): string;
    /** @internal */
    abstract updateAttrs(json: any): void;
    /** @internal */
    abstract getAttributeDefinitions(): AttributeDefinitions;
}
