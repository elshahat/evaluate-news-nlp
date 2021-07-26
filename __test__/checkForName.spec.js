import { checkForName } from "../src/client/js/nameChecker";

describe("Testing the check for name function", () => {
    test("The function should be defined", () => {
        expect(checkForName).toBeDefined();
    });
});
