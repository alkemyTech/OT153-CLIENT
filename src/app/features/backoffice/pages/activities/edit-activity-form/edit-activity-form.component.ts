import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "@app/core/services/http.service";
import { ActivityResponse } from "@app/shared/models/activity.model";
import { BehaviorSubject, Subscription } from "rxjs";
@Component({
  selector: "app-edit-activity-form",
  templateUrl: "./edit-activity-form.component.html",
  styleUrls: ["./edit-activity-form.component.scss"],
})
export class EditActivityFormComponent implements OnInit, OnDestroy {
  name = "";
  name$ = new BehaviorSubject<string>(this.name);
  image = "";
  image$ = new BehaviorSubject<string>(this.name);
  description = "";
  description$ = new BehaviorSubject<string | null>(this.name);

  activityResponse: ActivityResponse = {
    success: null,
    data: { id: "", name: "", description: "", image: "" },
    message: "",
  };
  subscription: Subscription;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity() {
    this.activityResponse.data.id = this.route.snapshot.url[2].path; // [2] = index of url: UrlSegment[] from '/actividades/editar/:id'

    this.subscription = this.http
      .getActivity(
        `http://ongapi.alkemy.org/api/activities/${this.activityResponse.data.id}`
      )
      .subscribe((activity) => {
        this.description = activity.data.description;
        this.description$.next(this.description);
        this.name = activity.data.name;
        this.name$.next(this.name);
        this.image = activity.data.image;
        this.image$.next(this.image);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
