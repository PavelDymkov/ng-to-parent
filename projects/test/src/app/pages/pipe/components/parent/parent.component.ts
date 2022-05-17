import { Component } from "@angular/core";
import { FromChild } from "ng-to-parent";

import { message, pipeMessage } from "../../message";

@Component({
    selector: "app-parent",
    templateUrl: "./parent.component.html",
    providers: [FromChild],
})
export class ParentComponent {
    constructor(fromChild: FromChild) {
        fromChild.listen(message).subscribe(() => {
            setTimeout(() => console.log("Listen", "parent"));
        });
        fromChild.pipe(pipeMessage).subscribe(() => {
            console.log("Pipe: parent");
        });
    }
}
