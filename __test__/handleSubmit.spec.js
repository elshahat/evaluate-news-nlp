import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handle submit function", () => {
    test("The function should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});
