import { TokenService } from './../../api/services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/api/models';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  identificationState:string = "";

  ///////// mocked data
  username:string = "james";
  password:string = "james123";
  modal_message:string = "";
  ///////////////

  constructor(private router:Router, private tokenService:TokenService, private toastr: ToastrService, private authenticationResult:AuthenticationService)
  {

  }

  showAuthenticationModal:boolean = false;

  ngOnInit(): void {
  }

  async onClickIdentificationBtn()
  {
    var loginDto:LoginDto = { username: this.username, password: this.password};

    this.tokenService.loginAsync$Json({ "body" : loginDto})
    .subscribe((value) =>
    {
      console.log(value);
      if(value.logged && typeof value.token === 'string')
      {
        console.log("User " + value.firstName + " " + value.lastName + " is authenticatd");
        this.toastr.success('Connected successfuly', 'Authentication');
        this.authenticationResult.setToken(value.token!);
        this.router.navigate(["/dashboard"]);
      }
      else
      {
        this.toastr.warning('Wrong credentials', 'Authentication');
        console.warn("Authentication attemp failed");
      }
    }, (error) =>
    {
      this.toastr.error("Wrong credentials", "Internal Error");
    });
  }

  onModalAuthenticationClicked()
  {
    this.showAuthenticationModal = false;
  }
}
