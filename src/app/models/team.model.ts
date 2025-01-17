import { Player } from "./player.model";

export interface Team {
    id?: number,
    name: string,
    site: string,
    stage: string,
    players : Player[],
}