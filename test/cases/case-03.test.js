const url = "/error";

describe("Provide error", () => {
    it("should throw error", async () => {
        await io({
            url,

            async output({ error }) {
                const message =
                    "Inject error: class ToParent must be provide in component";

                error(message);
            },
        });
    });
});
