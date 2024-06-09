import { readdirSync } from "fs";

export function getAllFiles (directory: string) {
    var directoryContents = readdirSync(directory);
    var filePaths: Array<string> = [];

    for (const fileName of directoryContents) {
        const filePath = `${directory}/${fileName}`;
        filePaths.push(filePath);
    }

    return filePaths;
}