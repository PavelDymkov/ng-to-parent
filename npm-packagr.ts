import { npmPackagr } from "npm-packagr";
import {
    assets,
    badge,
    git,
    npx,
    Pipeline,
    PipelineContext,
    publish,
    test,
} from "npm-packagr/pipelines";

npmPackagr({
    pipelines: [
        git("commit", "ng-to-parent"),

        npx("ng build"),

        test(),

        badge("tests", {
            label: "tests",
            message: "passing",
        }),

        // ({ exec, packageDirectory }: PipelineContext) => {
        //     const projectDirectory = "projects/to-parent";

        //     exec("npm version patch", { cd: projectDirectory });
        //     exec("npm version patch", { cd: packageDirectory });
        // },

        createLicenseBadge,

        assets("LICENSE", "README.md"),

        git("commit", "ng-to-parent"),
        git("push"),

        publish({
            login: { account: "paveldymkov", email: "dymkov86@gmail.com" },
        }),
    ],
});

function createLicenseBadge(): Pipeline {
    const { license } = require("./package/package");

    return badge("license", {
        label: "license",
        message: String(license),
        messageColor: "green",
    });
}
