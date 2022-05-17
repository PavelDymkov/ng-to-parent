import { Component } from "@angular/core";
import { FromChild } from "ng-to-parent";

import { empty, objectPayload, primitivePayload } from "../../messages";

@Component({
    selector: "app-parent",
    templateUrl: "./parent.component.html",
    providers: [FromChild],
})
export class ParentComponent {
    constructor(fromChild: FromChild) {
        fromChild.listen(empty).subscribe(() => {
            console.log("empty");
        });

        fromChild.listen(objectPayload).subscribe((payload) => {
            console.log("object-payload", payload);
        });

        fromChild.listen(primitivePayload).subscribe((payload) => {
            console.log("primitive-payload", payload);
        });
    }
}
