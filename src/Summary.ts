import { MatchData } from "./matchData";
import { WinsAnalysis } from "./analysers/WinAnalysis";
import { HtmlReport } from "./reportsTargets/HtmlReport";
import { ConsoleReport } from "./reportsTargets/ConsoleReport";


export interface Analyser{
    run(matches: MatchData[]): string;
}

export interface OutPutTarget {
    print(report: string): void
}

// Using composition classes here  ie we are delegating 
// Analysing data to analyse data (new WinsAnalysis)  and delegating ouput to another
// class .

export class Summary {
    constructor(public analyser: Analyser, public outputTarget: OutPutTarget){}

    static winsAnalysisWithHtmlReport(team: string): Summary{
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }
    static winsAnalysisWithConsole(team: string): Summary{
        return new Summary(
            new WinsAnalysis(team),
            new ConsoleReport()
        )
    }


    buildAndPrintReport(matches: MatchData[]): void{
        const output = this.analyser.run(matches)
        this.outputTarget.print(output)
    }
}