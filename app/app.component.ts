import { Component } from "@angular/core";
import { Activity } from "./activity";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    constructor() { }

    ngOnInit(): void {
        let activity = new Activity();
        activity.log("ngOnInit");
    }
}
