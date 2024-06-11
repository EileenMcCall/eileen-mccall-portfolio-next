"use client"
import Image from "next/image";
import { useState } from "react";
import stoneLarge from "@public/ogham/Stone Large.svg";
import stoneMedium from "@public/ogham/Stone Medium.svg";
import stoneSmall from "@public/ogham/Stone Small.svg";
import { oghamLetters } from "./ogham";
import oghamStyles from "./Ogham.module.css";

interface OghamLetter {
    name: string;
    ipa: string;
    meaning: string;
    ogham: string;
    image: string;
}

export default function Ogham() {
    var [letters, setLetters] = useState<Array<OghamLetter> | null>(null);
    var [ letterCount, setLetterCount ] = useState<number>(1);

    return (
        <section>
            <h1>Ogham</h1>
            <p>Ogham is an ancient Irish alphabet. It is a script that was used in Ireland from the 4th to the 7th century. It was used to write in the Old Irish language. The Ogham alphabet is made up of a series of strokes along or across a line. Each stroke represents a letter of the alphabet. The Ogham alphabet is made up of 20 letters. The alphabet is divided into four groups of five letters each. Each group is called an aicme. The letters in each aicme are named after trees. The Ogham alphabet is read from bottom to top or from left to right. The Ogham alphabet is written in a series of strokes along or across a line</p>


            <h2>Generate a reading</h2>
            <p>Click the button to generate a random Ogham letter.</p>

            <label htmlFor="numberOfLetters">Choose how many ogham letters you would like:</label>
            <input
                type="number" 
                id="numberOfLetters" 
                name="numberOfLetters" 
                min="1" 
                max="5" 
                value={letterCount}
                onChange={(e) => setLetterCount(parseInt(e.target.value))}
            />
            <button 
                onClick={getLetters}
                className={oghamStyles.generate}
            >Generate</button>
            <h3>Your reading:</h3>
                { 
                    letters 
                        ? <div className={oghamStyles.reading}>
                            <ReadingResult letters={letters} />
                            <ResultDetails letters={letters} />
                        </div>
                        : null
                }
        </section>
    );

    function getLetters(): void {
        setLetters(null);

        var letterIndexes: Array<number> = [];

        for (let i = 0; i < letterCount; i++) {
            let generateIndex = function (): number {
                let letterIndex = Math.floor(Math.random() * 25);
                return letterIndexes.includes(letterIndex) ? generateIndex() : letterIndex;
            }

            letterIndexes.push(generateIndex());
        }

        var letters = letterIndexes.map(function (index) {
            return oghamLetters[index];
        });

        setLetters(letters);
    }
}

function ReadingResult ({letters}:{letters: Array<OghamLetter>}) {
    var stoneImage: string;
    var stoneHeight: number;

    if ( letters.length > 3 ) {
        stoneImage = stoneLarge;
        stoneHeight = 500;
    } else if ( letters.length > 1 ) {
        stoneImage = stoneMedium;
        stoneHeight = 375;
    } else {
        stoneImage = stoneSmall;
        stoneHeight = 250;
    }

    return (
        <div 
            className={oghamStyles.reading__ogham}
            style={{ height: stoneHeight }}
        >
            <Image
                src={stoneImage}
                width={175}
                height={stoneHeight}
                alt="Standing stone"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0
                }}
            />
            <div className={oghamStyles.ogham__letters}>
                {
                    letters.reverse().map(function (letter, index) {
                        return (
                            <img 
                                key={index} 
                                src={`/ogham/${letter.image}`} 
                                alt={letter.name} 
                                style={{ marginBottom: "-1px" }}
                            />)
                    })
                }
            </div>
            <img src={`/ogham/root.svg`} alt="Root" />
        </div>
    );
}

function ResultDetails ({ letters }: { letters: Array<OghamLetter> }) {
    return (
        <ul className={oghamStyles.reading__detail}>
            {
                letters.reverse().map(function (letter, index) {
                    return (
                        <li className={oghamStyles.reading__detail__item} key={index}>
                            <img 
                                src={`/ogham/${letter.image}`} 
                                alt={letter.name} 
                                className={oghamStyles.reading__detail__item__image}
                            />
                            <dl>
                                <dt>Name:</dt>
                                <dd>{letter.name}</dd>
                                <dt>Meaning:</dt>
                                <dd>{letter.meaning}</dd>
                                <dt>IPA:</dt>
                                <dd>/{letter.ipa}/</dd>
                            </dl>
                        </li>
                    )
                })
            }
        </ul>
    );
}