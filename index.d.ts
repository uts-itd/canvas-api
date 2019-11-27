import { Canvas } from "./canvas";

declare namespace canvasApi {
    export function canvas(): void;
}

declare function canvasApi(domain: any, token: any): Canvas;
export = canvasApi;