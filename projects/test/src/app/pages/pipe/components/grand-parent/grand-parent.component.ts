import { Component } from "@angular/core";
import { FromChild } from "ng-to-parent";

import { message, pipeMessage } from "../../message";

@Component({
    selector: "app-grand-parent",
    templateUrl: "./grand-parent.component.html",
    providers: [FromChild],
})
export class GrandParentComponent {
    constructor(fromChild: FromChild) {
        fromChild.listen(message).subscribe(() => {
            console.log("Listen", "grand-parent");
        });
        fromChild.listen(pipeMessage).subscribe(() => {
            console.log("Pipe: grand-parent");
        });
    }
}
