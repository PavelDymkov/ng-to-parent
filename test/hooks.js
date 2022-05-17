const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { port } = require("./config");

let browser;

globalThis.page = null;

globalThis.io = ({ clickTo, input, output, url }) =>
    io({
        page,

        async input() {
            await page.goto(`http://localhost:${port}${url || ""}`);

            if (clickTo) await page.click(`button#${clickTo}`);
            if (input) await input();
        },
        output,
    });

exports.mochaHooks = {
    async beforeAll() {
        browser = await puppeteer.launch();
    },

    async beforeEach() {
        page = await browser.newPage();
    },

    async afterEach() {
        await page.close();

        page = null;
    },

    async afterAll() {
        await browser.close();

        browser = null;
    },
};
