#!/usr/bin/env ts-node

import fs from "fs";
import matter from "gray-matter";
import { format } from "date-fns";
import os from "os";
import slugify from "slugify";

const EMBED_IMAGE_REGEX = /!\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€_! ]+)\]\]/g;
const EMBED_LINK_REGEX = /\[\[([a-zA-ZÀ-ÿ0-9-'?%.():&,+/€_! ]+)\]\]/g;

const vaultDir = `${os.homedir()}/Obsidian/Zettelkasten/Reference`;
const imagesDir = `${vaultDir}/_Images`;
const notesDir = `${vaultDir}/Permanent`
const notesPath = `${process.cwd()}/notes`

async function getDirContents (): Promise<void> {
    // get list of files in obsidian notes folder
    var contents: Array<string> = fs.readdirSync(notesDir);
    var copiedFiles = [];

    // for each of the files
    for (let filename of contents) {
        // get the file's path
        const filepath: string = `${notesDir}/${filename}`;
        let filestat: fs.Stats = fs.statSync(filepath);

        // read the file's contents
        let content: string = fs.readFileSync(filepath, "utf-8");
        // extract the frontmatter
        let frontmatter: matter.GrayMatterFile<string> = matter(content);

        // if the file has been marked to be published
        if (frontmatter.data.published) {
            if (!frontmatter.data.title) {
                frontmatter.data.title = filename.replace(/\.md/, "")
            }

            frontmatter.data.slug = slugify(
                filename
                    .replace(/\.md/, "")
                    .replace(/\./, "-dot-"), {
                lower: true,
                remove: /[\.\?\_"',\(\))]*/
            });

            fs.writeFileSync(
                `${notesPath}/${frontmatter.data.slug}.md`,
                matter.stringify(frontmatter.content, frontmatter.data)
            );
        }
    }
}

async function main () {
    await getDirContents();
}

main();