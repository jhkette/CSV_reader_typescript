import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('original.csv');
const summary = Summary.winsAnalysisWithConsole('Man United');
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

summary1.buildAndPrintReport(matchReader.matches);