import { GameObject } from "../GameObject/GameObject";
import { GameCamera } from "./GameCamera";

export class GameScene {
    private allObjects: Set<GameObject> = new Set<GameObject>();

    constructor(
        private nameScene: string,
        private gameCamera: GameCamera,
        objectsOfScene: Array<GameObject>
    ) {
        objectsOfScene.forEach((go: GameObject) => this.allObjects.add(go))
    }

    public getNameScene(): string
    {
        return this.nameScene;
    }

    public getGameObjectOnCamera(): Set<GameObject> {
        return this.gameCamera.onCamera(this.allObjects);
    }
}