import { List } from './List'

export class GraphV1 {
    nodes: List<number>[];
    size: number;

    constructor(_size: number) {
        this.nodes = [];
        this.size = _size;

        for (let i = 0; i < this.size; i++) {
            this.nodes.push(new List<number>);
        }
    }

    addDirectLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.nodes[u].insertFront(v);
    }

    addIndirectLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.nodes[u].insertFront(v);
        this.nodes[v].insertFront(u);
    }

    deleteLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.nodes[u].deleteItem(v);
    }

    areLinked(u: number, v: number) {
        this._checkNodes(u, v);
        return this.nodes[u].search(v) !== null;
    }

    private _checkNodes(u: number, v: number) {
        if (u >= this.size) throw new Error(`Node ${u} does not exist`)
        if (v >= this.size) throw new Error(`Node ${v} does not exist`)
    }

}

export class GraphV2 {
    adjacencies: boolean[][];
    size: number;

    constructor(_size: number) {
        this.adjacencies = Array.from(Array(_size), () => Array.from(Array(_size), () => false))

        this.size = _size;
    }

    addDirectLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.adjacencies[u][v] = true;
    }

    addIndirectLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.adjacencies[u][v] = true;
        this.adjacencies[v][u] = true;
    }

    deleteLink(u: number, v: number) {
        this._checkNodes(u, v);
        this.adjacencies[u][v] = false;
    }

    areLinked(u: number, v: number) {
        this._checkNodes(u, v);
        return this.adjacencies[u][v];
    }

    private _checkNodes(u: number, v: number) {
        if (u >= this.size) throw new Error(`Node ${u} does not exist`)
        if (v >= this.size) throw new Error(`Node ${v} does not exist`)
    }

}