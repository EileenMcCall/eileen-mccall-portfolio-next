#!/usr/bin/env ts-node

import fs from "fs";
import matter from "gray-matter";
import { format } from "date-fns";
import os from "os";

const EMBED_LINK_REGEX = /!\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€_! ]+)\]\]/g;
const vaultDir = `${os.homedir()}/Obsidian/Zettelkasten/Reference`;
const imagesDir = `${vaultDir}/_Images`;
const notesDir = `${vaultDir}/Permanent`

async function getDirContents (directory: string): Promise<void> {
    var contents: Array<string> = fs.readdirSync(directory);

    for (let filename of contents) {
        const filepath: string = `${directory}/${filename}`;
        let filestat: fs.Stats = fs.statSync(filepath);

        let content: string = fs.readFileSync(filepath, "utf-8");
        let result: matter.GrayMatterFile<string> = matter(content);

        if (result.data.published) {
            let foundLinks = content.match(EMBED_LINK_REGEX);

            if (foundLinks !== null) {
                
            }
        }
    }
}