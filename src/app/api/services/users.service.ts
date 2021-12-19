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

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAvailableUsersAsync
   */
  static readonly GetAvailableUsersAsyncPath = '/api/Users';

  /**
   * Get available Users.
   *
   * Get Activity status of available user logged and has a status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAvailableUsersAsync$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableUsersAsync$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetAvailableUsersAsyncPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Get available Users.
   *
   * Get Activity status of available user logged and has a status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAvailableUsersAsync$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableUsersAsync$Plain(params?: {
  }): Observable<Array<User>> {

    return this.getAvailableUsersAsync$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Get available Users.
   *
   * Get Activity status of available user logged and has a status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAvailableUsersAsync$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableUsersAsync$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetAvailableUsersAsyncPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Get available Users.
   *
   * Get Activity status of available user logged and has a status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAvailableUsersAsync$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailableUsersAsync$Json(params?: {
  }): Observable<Array<User>> {

    return this.getAvailableUsersAsync$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation patchUserActivityAsync
   */
  static readonly PatchUserActivityAsyncPath = '/api/Users';

  /**
   * Patch current user ActivityCode.
   *
   * Modify user activity Code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchUserActivityAsync()` instead.
   *
   * This method doesn't expect any request body.
   */
  patchUserActivityAsync$Response(params?: {
    newActivityCode?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.PatchUserActivityAsyncPath, 'patch');
    if (params) {
      rb.query('newActivityCode', params.newActivityCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Patch current user ActivityCode.
   *
   * Modify user activity Code
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchUserActivityAsync$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  patchUserActivityAsync(params?: {
    newActivityCode?: string;
  }): Observable<void> {

    return this.patchUserActivityAsync$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
