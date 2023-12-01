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
})