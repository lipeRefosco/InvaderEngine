export type BasicForm = {
    color: string
}

export type Sprites = {
    sprites: Array<ImageBitmap>;
}

export interface Anime {
    basic: BasicForm;
    sprites: Sprites | undefined;

    getBasic(): BasicForm;

    getSprites(): Sprites | undefined;
}