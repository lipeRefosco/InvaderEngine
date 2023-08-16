import { GameScene } from "../GameScene/GameScene";

export class GameLogic {
    constructor(private gameSceneList: Set<GameScene> = new Set<GameScene>()) {
    }
}