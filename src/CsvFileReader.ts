import fs from 'fs';


// This is just a csv reader - 
// that uses readFileSync to open a file
// then read it, split it by each line, then map each array 
// who split each item in an array 
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      )
  }
}