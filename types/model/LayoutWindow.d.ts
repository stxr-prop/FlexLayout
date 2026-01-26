import { Rect } from "../Rect.ts";
import { IJsonPopout } from "./IJsonModel.ts";
import { Model } from "./Model.ts";
import { RowNode } from "./RowNode.ts";
import { Node } from "./Node.ts";
import { TabSetNode } from "./TabSetNode.ts";
import { LayoutInternal } from "../view/Layout.ts";
export declare class LayoutWindow {
    private _windowId;
    private _layout;
    private _rect;
    private _window?;
    private _root?;
    private _maximizedTabSet?;
    private _activeTabSet?;
    private _toScreenRectFunction;
    constructor(windowId: string, rect: Rect);
    visitNodes(fn: (node: Node, level: number) => void): void;
    get windowId(): string;
    get rect(): Rect;
    get layout(): LayoutInternal | undefined;
    get window(): Window | undefined;
    get root(): RowNode | undefined;
    get maximizedTabSet(): TabSetNode | undefined;
    get activeTabSet(): TabSetNode | undefined;
    /** @internal */
    set rect(value: Rect);
    /** @internal */
    set layout(value: LayoutInternal);
    /** @internal */
    set window(value: Window | undefined);
    /** @internal */
    set root(value: RowNode | undefined);
    /** @internal */
    set maximizedTabSet(value: TabSetNode | undefined);
    /** @internal */
    set activeTabSet(value: TabSetNode | undefined);
    /** @internal */
    get toScreenRectFunction(): (rect: Rect) => Rect;
    /** @internal */
    set toScreenRectFunction(value: (rect: Rect) => Rect);
    toJson(): IJsonPopout;
    static fromJson(windowJson: IJsonPopout, model: Model, windowId: string): LayoutWindow;
}
