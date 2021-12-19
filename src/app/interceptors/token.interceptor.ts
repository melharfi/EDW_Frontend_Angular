import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authentication:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authentication.getToken()}`
      }
    });

    return next.handle(request);
  }
}
