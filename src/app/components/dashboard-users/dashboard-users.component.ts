import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/models';
import { Router } from '@angular/router';

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

  getElapsedTime(timpestamp?:number)
  {
    var currentTime = Date.now();
    var userActivityTime = (timpestamp as number) * 1000;
    var elapsedTime = currentTime - userActivityTime;

    var date = new Date(elapsedTime);
    // var hours = date.getHours();
    // var minutes = "0" + date.getMinutes();
    // var seconds = "0" + date.getSeconds();
    // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    // console.log("formattedTime = " + formattedTime);

    return date;
  }
}
