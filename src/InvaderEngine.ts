import { RenderConfig } from "./Render/RenderConfig";
import { Render } from "./Render/Render";
import { GameLogic } from "./GameLogic/GameLogic";

export class InvaderEngine {
    private render: Render;
    private logic: GameLogic

    constructor(configurations: RenderConfig)
    {
        this.render = new Render(configurations);
        this.logic  = new GameLogic();
    }

    bootstrap(): HTMLCanvasElement
    {
        this.render.styleCanvas("maxWidth", "100vw");
        this.render.styleCanvas("maxHeight", "100vh");
        this.render.styleCanvas("imageRendering", "pixalated");
        this.render.styleCanvas("imageRendering", "-moz-crisp-edges");
        this.render.styleCanvas("imageRendering", "crisp-edges");
        return this.render.getCanvas();
    }

    run(): void
    {
        this.render.update();
    }
}