import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing the check for URL function", () => {
    test("The function should be defined", () => {
        expect(checkForURL).toBeDefined();
    });
});
