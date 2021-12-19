/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginDto } from '../models/login-dto';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root',
})
export class TokenService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginAsync
   */
  static readonly LoginAsyncPath = '/api/Token';

  /**
   * Authentication.
   *
   * Authenticate and return a Token using LoginResult
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginAsync$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAsync$Plain$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<LoginResult>> {

    const rb = new RequestBuilder(this.rootUrl, TokenService.LoginAsyncPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResult>;
      })
    );
  }

  /**
   * Authentication.
   *
   * Authenticate and return a Token using LoginResult
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginAsync$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAsync$Plain(params?: {
    body?: LoginDto
  }): Observable<LoginResult> {

    return this.loginAsync$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResult>) => r.body as LoginResult)
    );
  }

  /**
   * Authentication.
   *
   * Authenticate and return a Token using LoginResult
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginAsync$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAsync$Json$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<LoginResult>> {

    const rb = new RequestBuilder(this.rootUrl, TokenService.LoginAsyncPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResult>;
      })
    );
  }

  /**
   * Authentication.
   *
   * Authenticate and return a Token using LoginResult
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginAsync$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginAsync$Json(params?: {
    body?: LoginDto
  }): Observable<LoginResult> {

    return this.loginAsync$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResult>) => r.body as LoginResult)
    );
  }

}
