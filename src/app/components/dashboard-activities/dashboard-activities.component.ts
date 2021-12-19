import { Activity } from './../../api/models/activity';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ActivitiesService, UsersService } from 'src/app/api/services';

@Component({
  selector: 'app-dashboard-activities',
  templateUrl: './dashboard-activities.component.html',
  styleUrls: ['./dashboard-activities.component.css']
})
export class DashboardActivitiesComponent implements OnInit {

  activities? : Activity[];
  currentActivity? : string;

  constructor(private router:Router, private toastr: ToastrService, private usersService: UsersService, private activitiesService : ActivitiesService, private authenticationService:AuthenticationService) {
    if(typeof this.authenticationService.getToken() !== 'string')
    this.router.navigate(["/login"]);

    console.log(this.authenticationService.getToken());
    activitiesService.getAllActivitiesAsync$Json()
    .subscribe(
      (value)=>
      {
        this.activities = value;
        console.log(value);
      },
      (error)=>
      {
        console.log(error);
      }
    )
   }

  ngOnInit(): void {
  }

  onChangeActivity(newActivityCode:string)
  {
    this.usersService.patchUserActivityAsync({ newActivityCode })
    .subscribe((value)=>
      {
        console.log(newActivityCode);
        this.currentActivity = newActivityCode;
      },(error) =>
      {
        console.error(error);
      }
    );
  }

  logout()
  {
    this.authenticationService.setToken("");
    this.router.navigate(["login"]);
  }
}
