import { RenderConfig } from "./RenderConfig";
import { CanvasContexts } from "./CanvasContexts"

export class Render {
    private canvas: HTMLCanvasElement;
    private twoDView: CanvasRenderingContext2D;

    constructor(configurations: RenderConfig)
    {
        this.canvas = document.createElement('canvas');
        this.twoDView = this.setTwoDView();
        this.canvas.width = configurations.width;
        this.canvas.height = configurations.height;
        this.canvas.style.scale = configurations.scale.toString();
    }

    private setTwoDView(): CanvasRenderingContext2D
    {
        const renderType = this.canvas.getContext(CanvasContexts.TwoD)
        
        if(!renderType) throw new Error('Fail to set 2D Render');
        
        return renderType;
    }

    public getTwoDView(): CanvasRenderingContext2D
    {
        return this.twoDView;
    }

    public styleCanvas(property:string, value:string): void
    {
        this.canvas.style.setProperty(property, value);
    }

    public getCanvas(): HTMLCanvasElement
    {
        return this.canvas
    }

    public update(): void
    {
        
    }
}