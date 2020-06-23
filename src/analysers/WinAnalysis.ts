import { Analyser } from "../Summary";
import { MatchData } from "../matchData";
import {MatchResult} from '../MatchResult'

// adding implements here so we know it works with Analyser
// interface. Don't have to this - just useful to have typescript check
export class WinsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.team &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} game`
  }
}
