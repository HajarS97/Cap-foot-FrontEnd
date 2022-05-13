import { Team } from "./team.module";

export interface Match{
    id : number,
    stage : string,
    matchDate : Date,
    site : string,
    scoreHome : number,
    scoreAway : number,
    matchState: string,
    teamHome : Team,
    teamAway : Team
}
