import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ChildComponent } from "./components/child/child.component";
import { GrandParentComponent } from "./components/grand-parent/grand-parent.component";
import { ParentComponent } from "./components/parent/parent.component";
import { PipeComponent } from "./pipe.component";

@NgModule({
    imports: [RouterModule.forChild([{ path: "", component: PipeComponent }])],
    declarations: [
        ChildComponent,
        GrandParentComponent,
        ParentComponent,
        PipeComponent,
    ],
})
export class PipeModule {}
