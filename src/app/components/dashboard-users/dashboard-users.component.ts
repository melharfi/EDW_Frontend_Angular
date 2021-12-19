import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/models';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {

  availableUsers!: User[];

  constructor(private router:Router, private usersService:UsersService, authenticationService:AuthenticationService) {
    if(typeof authenticationService.getToken() !== 'string')
    this.router.navigate(["/login"]);

    this.refreshUsers();
  }

  ngOnInit(): void {
    this.initLiveReload();
  }

  refreshUsers()
  {
    this.usersService.getAvailableUsersAsync$Json({})
    .subscribe((value)=>
    {
      this.availableUsers = value;
      console.log(value);
    },(error)=>
    {
      console.error("Error getting list of availableUsers");
    });
  }

  initLiveReload()
  {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.baseUrl + '/activityhub')
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("ActivityChanged", () => {
      this.refreshUsers();
      console.log("ActivityChanged triggered");
    });
  }
}
