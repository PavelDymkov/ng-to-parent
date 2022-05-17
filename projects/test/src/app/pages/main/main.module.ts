import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ChildComponent } from "./components/child/child.component";
import { ParentComponent } from "./components/parent/parent.component";
import { MainComponent } from "./main.component";

@NgModule({
    imports: [RouterModule.forChild([{ path: "", component: MainComponent }])],
    declarations: [ChildComponent, MainComponent, ParentComponent],
})
export class MainModule {}
