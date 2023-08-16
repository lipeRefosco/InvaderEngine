import { Axis, Position } from "../Axis";

export class GameObject implements Axis {
    private position: Position

    constructor(position: Position) {
        this.position = position
    }

    public moveTo(newPosition: Position): void {
        this.position = newPosition;
    }

    public getPosition(): Position {
        return this.position;
    }
}