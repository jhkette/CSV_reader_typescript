import {MatchData} from './matchData'
import {CsvFileReader} from './CsvFileReader'

// define what properties the class DataReader
// has
interface DataReader {
  read(): void;
  data: string[][];
}

import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";


export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}


  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // type assertions
          // override tell typescript
          // what this variable is
          row[5] as MatchResult, // 'H' 'A' 'D'
          row[6],
        ];
      }
    );
  }
}
