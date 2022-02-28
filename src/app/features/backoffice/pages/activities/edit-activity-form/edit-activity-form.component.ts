import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivityResponse } from "@app/core/models/activities.interfaces";
import { HttpService } from "@app/core/services/http.service";
import { BehaviorSubject, Subscription } from "rxjs";
@Component({
  selector: 'app-edit-activity-form',
  templateUrl: './edit-activity-form.component.html',
  styleUrls: ['./edit-activity-form.component.scss'],
})
export class EditActivityFormComponent implements OnInit, OnDestroy {
  name: string | undefined = "";
  name$ = new BehaviorSubject<string | undefined>(this.name);
  image: string | undefined = "";
  image$ = new BehaviorSubject<string | undefined>(this.name);
  description: string | undefined = "";
  description$ = new BehaviorSubject<string | undefined | null>(this.name);

  activityResponse: ActivityResponse = {
    success: true,
    data: { id: "", name: "", description: "", image: "" },
    message: "",
  };
  subscription: Subscription;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity() {
    this.activityResponse.data.id = this.router.url.split("/").pop(); 

    this.subscription = this.http
      .getActivity(`http://ongapi.alkemy.org/api/activities/${this.activityResponse.data.id}`)
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
