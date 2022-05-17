const { ok } = require("assert");

const url = "/pipe";

describe("Listen/Pipe tests", () => {
    it("should listen message", async () => {
        await io({
            url,
            clickTo: "listen",

            async output({ message }) {
                const payload = await message("Listen");

                ok(payload === "parent");
            },
        });
    });

    it("should pipe message", async () => {
        await io({
            url,
            clickTo: "pipe",

            async output({ message }) {
                await message("Pipe: parent");
                await message("Pipe: grand-parent");
            },
        });
    });
});
