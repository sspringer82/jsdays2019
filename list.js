"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List {
    constructor() {
        this.items = [];
    }
    add(i) {
        this.items.push(i);
    }
    get() {
        return this.items;
    }
}
exports.List = List;
