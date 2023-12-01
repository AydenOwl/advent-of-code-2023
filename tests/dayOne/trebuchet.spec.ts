import { getCalibrationFrom } from "../../src/dayOne/trebuchet"

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
})