import { Position } from "../Axis";
import { GameObject } from "../GameObject/GameObject";

export type Resolution = {
    width: number,
    height: number,
}

export type Vision = {
    horizontal: Array<number>
    vertical: Array<number>
}

enum VisionPositions {
    Start,
    End
}

export class GameCamera {
    private position: Position;
    private resolution: Resolution;
    private vision: Vision;

    constructor(
        position: Position = {x: 0, y: 0},
        resolution: Resolution = {width: 480, height: 360},
    ) {
        this.position = position;
        this.resolution = resolution;

        this.vision = {
            horizontal: new Array<number>(2),
            vertical: new Array<number>(2)
        }

        this.vision.horizontal.push(position.x, resolution.width + position.x);
        this.vision.vertical.push(position.y, resolution.height + position.y);
    }

    /**
     * This method will return a list of the Objects it sees.
     * Related to it's position and resolution.
     * The GameCamera anchor point is in the top left corner.
     * 
     * First you need to know which positions the camera can see,
     * based on position and resolution.
     * 
     * The GameObject is selected if the position of x and y is
     * within the camera's view.
     * 
     * @param objectsOfScene
     * @returns Set<GameObjects>
     */
    public onCamera(objectsOfScene: Set<GameObject>): Set<GameObject> {
        const objectsOnCamera = new Set<GameObject>();

        objectsOfScene.forEach((go: GameObject) => {
            const objectPosition = go.getPosition();

            if(this.onView(objectPosition.x, this.vision.horizontal) && this.onView(objectPosition.y, this.vision.vertical)) {
                objectsOnCamera.add(go);
            }
        })

        return objectsOnCamera;
    }

    private onView(objectPosition: number, visionAxis: Array<number>): boolean {
        
        if(objectPosition < visionAxis[VisionPositions.Start] || objectPosition > visionAxis[VisionPositions.End]) {
            return false;
        }

        return true;
    }
}