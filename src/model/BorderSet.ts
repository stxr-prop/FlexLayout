import { DockLocation } from "../DockLocation.ts";
import { DropInfo } from "../DropInfo.ts";
import { BorderNode } from "./BorderNode.ts";
import { IDraggable } from "./IDraggable.ts";
import { Model } from "./Model.ts";
import { Node } from "./Node.ts";

export class BorderSet {
    /** @internal */
    static fromJson(json: any, model: Model) {
        const borderSet = new BorderSet(model);
        borderSet.borders = json.map((borderJson: any) => BorderNode.fromJson(borderJson, model));
        for (const border of borderSet.borders) {
            borderSet.borderMap.set(border.getLocation(), border);
        }
        return borderSet;
    }
    /** @internal */
    private borders: BorderNode[];
    /** @internal */
    private borderMap: Map<DockLocation, BorderNode>;
    /** @internal */
    private layoutHorizontal: boolean;

    /** @internal */
    constructor(_model: Model) {
        this.borders = [];
        this.borderMap = new Map<DockLocation, BorderNode>();
        this.layoutHorizontal = true;
    }

    toJson() {
        return this.borders.map((borderNode) => borderNode.toJson());
    }

    /** @internal */
    getLayoutHorizontal () {
        return this.layoutHorizontal;
    }

    /** @internal */
    getBorders() {
        return this.borders;
    }

    /** @internal */
    getBorderMap() {
        return this.borderMap;
    }

    /** @internal */
    forEachNode(fn: (node: Node, level: number) => void) {
        for (const borderNode of this.borders) {
            fn(borderNode, 0);
            for (const node of borderNode.getChildren()) {
                node.forEachNode(fn, 1);
            }
        }
    }

        /** @internal */
        setPaths() {
            for (const borderNode of this.borders) {
                const path = "/border/" + borderNode.getLocation().getName();
                borderNode.setPath(path);
                let i = 0;
                for (const node of borderNode.getChildren()) {
                    node.setPath( path + "/t" + i);
                    i++;
                }
            }
        }


    /** @internal */
    findDropTargetNode(dragNode: Node & IDraggable, x: number, y: number): DropInfo | undefined {
        for (const border of this.borders) {
            if (border.isShowing()) {
                const dropInfo = border.canDrop(dragNode, x, y);
                if (dropInfo !== undefined) {
                    return dropInfo;
                }
            }
        }
        return undefined;
    }
}
