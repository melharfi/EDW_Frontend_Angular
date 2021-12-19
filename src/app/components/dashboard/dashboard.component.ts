import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private authenticationService:AuthenticationService)
  {
    if(typeof authenticationService.getToken() !== 'string')
    this.router.navigate(["/login"]);;
  }

  ngOnInit(): void {
  }


}
