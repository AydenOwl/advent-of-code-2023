import { calibrateFromFile, getCalibrationFrom } from "../../src/dayOne/trebuchet"

describe("Day one - Trebuchet", () => {
    it("gets calibration of line with numbers in first and last places", () => {
        // Given
        const input = "1abc2"

        // When
        const calibration = getCalibrationFrom(input)
        
        // Then
        expect(calibration).toStrictEqual(12)
    })

    it("gets calibration of lines with more than two numbers", () => {
        // Given
        const input = "a1b2c3d4e5f"

        // When
        const calibration = getCalibrationFrom(input)
        
        // Then
        expect(calibration).toStrictEqual(15)
    })

    it("gets calibration of lines with only one number", () => {
        // Given
        const input = "treb7uchet"

        // When
        const calibration = getCalibrationFrom(input)
        
        // Then
        expect(calibration).toStrictEqual(77)
    })

    it("gets calibration from a text file", () => {
        // Given
        const filePath = "../../tests/dayOne/input.txt"

        // When
        const result = calibrateFromFile(filePath)

        // Then
        expect(result).toStrictEqual(142)
    })
})