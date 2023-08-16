import { RenderConfig } from "./Render/RenderConfig";
import { InvaderEngine } from "./InvaderEngine";

const config: RenderConfig = {
    width: 64,
    height: 64,
    scale: 10
};

const invaderEngine = new InvaderEngine(config);

document.body.appendChild(invaderEngine.bootstrap());

invaderEngine.run();