import {CsvFileReader} from './CsvFileReader'
import {dateStringToDate} from './utils'
import {MatchResult} from './MatchResult'

// A TUPLE TYPE !!!
type MatchData = [Date, string, string, number, number, MatchResult, string];

// we pass the tuple type as a a generic to MatchReader  - this
// is like an argument for <T> parameter in CSVFileReader
export class MatchReader extends CsvFileReader<MatchData>{
    mapRow(row: string[]): MatchData {
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
                row[6]
            

        ]
    }
}