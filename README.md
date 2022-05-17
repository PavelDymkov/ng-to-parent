# ng-to-parent

Send data to parent.

```ts
import { Message } from "ng-to-parent";

// create a message type
export const inputData = new Message<string>();
```

```ts
import { ToParent } from "ng-to-parent";

@Component({
    selector: "app-child",
    template: `
        <input #input />

        <button (click)="send(input.value)">Click me!</button>
    `,
    // It's important to provide
    // in the component, not to a module
    providers: [ToParent], // << !!!
})
export class ChildComponent {
    constructor(private toParent: ToParent) {}

    send(text: string): void {
        this.toParent.send(inputData, void 0);
    }
}
```

```ts
import { FromChild } from "ng-to-parent";

@Component({
    selector: "app-parent",
    template: "<ng-content></ng-content>",
    // It's important to provide
    // in the component, not to a module
    providers: [FromChild], // << !!!
})
export class ParentComponent {
    constructor(fromChild: FromChild) {
        fromChild.listen(inputData).subscribe((text) => {
            console.log(text);
        });
    }
}
```
