import { Component } from "@angular/core";
import { ToParent } from "ng-to-parent";

import { message, pipeMessage } from "../../message";

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html",
    providers: [ToParent],
})
export class ChildComponent {
    constructor(private readonly toParent: ToParent) {}

    sendMessage(): void {
        this.toParent.send(message, undefined);
    }

    sendPipeMessage(): void {
        this.toParent.send(pipeMessage, undefined);
    }
}
