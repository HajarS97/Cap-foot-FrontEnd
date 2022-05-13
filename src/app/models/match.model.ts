import { Team } from "./team.model";

export interface Match{
    id : number,
    groupePhase : boolean,
    directEliminationPhase : boolean,
    matchDate : Date,
    site : string,
    scoreHome : number,
    scoreAway : number,
    teamHome : Team,
    teamAway : Team
}
