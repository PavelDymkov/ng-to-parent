import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet>",
})
export class AppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: "",
                pathMatch: "full",
                loadChildren: () =>
                    import("./pages/main/main.module").then(
                        (m) => m.MainModule,
                    ),
            },
            {
                path: "pipe",
                loadChildren: () =>
                    import("./pages/pipe/pipe.module").then(
                        (m) => m.PipeModule,
                    ),
            },
            {
                path: "error",
                loadChildren: () =>
                    import("./pages/error/error.module").then(
                        (m) => m.ErrorModule,
                    ),
            },
        ]),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
