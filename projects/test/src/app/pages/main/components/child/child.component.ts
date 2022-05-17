import { Component } from "@angular/core";
import { ToParent } from "ng-to-parent";

import { empty, objectPayload, primitivePayload } from "../../messages";

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html",
    providers: [ToParent],
})
export class ChildComponent {
    constructor(private toParent: ToParent) {}

    sendEmpty(): void {
        this.toParent.send(empty, void 0);
    }

    sendPrimitivePayload(): void {
        this.toParent.send(primitivePayload, "text");
    }

    sendObjectPayload(): void {
        this.toParent.send(objectPayload, { text: "message", number: 1 });
    }
}
