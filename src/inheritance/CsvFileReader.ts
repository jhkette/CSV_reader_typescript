// NB we have to install node type definition files for this to work
// For node modules/node standrad libary we install npm install @types/node
// !important note
import fs from 'fs'

// Read filesync documentation
// https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_readfilesync_path_options




// https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f
// CsvFileReader takes a generic argument
// This means we could change the argument as well. At the moment it is <MatchData>
// but were we to change the programme it could be something else
export abstract class CsvFileReader<T> {
    // an array of tuples
    data: T[] = []
    // constructor which creates a variable 'filename' with type string
    constructor(public filename: string){}

    // Abstratct keyword here mean this method is implemented by child class
    abstract mapRow(row: string[]): T
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow); 

    }
    
    

}