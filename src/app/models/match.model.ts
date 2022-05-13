import { Team } from "./team.model";

export interface Match{
    id : number,
    groupePhase : boolean,
    directEliminationPhase : boolean,
    stage: string,
    matchDate : Date,
    site : string,
    scoreHome : number,
    scoreAway : number,
    matchState: string,
    teamHome : Team,
    teamAway : Team
}
