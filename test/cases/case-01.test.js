const { deepStrictEqual: equal } = require("assert");

describe("Common tests", () => {
    it("should receive message", async () => {
        await test("empty");
    });

    it("should receive string data", async () => {
        await test("primitive-payload", "text");
    });

    it("should receive object data", async () => {
        await test("object-payload", { text: "message", number: 1 });
    });
});

function test(id, expected) {
    return io({
        clickTo: id,

        async output({ message }) {
            const actual = await message(id);

            if (expected) equal(actual, expected);
        },
    });
}
