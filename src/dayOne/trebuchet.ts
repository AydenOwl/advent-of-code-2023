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