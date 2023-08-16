export type Position = {
    x: number,
    y: number
}

export interface Axis {

    moveTo(newPosition: Position): void;

    getPosition(): Position
}