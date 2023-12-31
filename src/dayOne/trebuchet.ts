import fs from 'fs'
import path from 'path'

export function getCalibrationFrom(line: string): number {
    const allNumbersRegex = /\d/g
    const matches = [...line.matchAll(allNumbersRegex)]

    const firstMatch = getFirstMatchValue(matches)
    const lastMatch = getLastMatchValue(matches)

    const result = firstMatch + lastMatch

    return Number(result)
}

function getFirstMatchValue(regexMatches: RegExpMatchArray[]): string {
    const firstMatchIndex = 0
    return regexMatches[firstMatchIndex][0]
}

function getLastMatchValue(regexMatches: RegExpMatchArray[]): string {
    const lastMatchIndex = regexMatches.length - 1
    return regexMatches[lastMatchIndex][0]
}

export function calibrateFromFile(filePath: string): number {
    const file = fs.readFileSync(path.resolve(__dirname, filePath), { encoding: 'utf-8'})

    const lines = file.toString().split("\n")

    const result = lines
        .map((line) => getCalibrationFrom(line))
        .reduce((previous, current) => previous + current)

    return result
}

const solution = calibrateFromFile("input.txt")
console.log("The solution is: ", solution)