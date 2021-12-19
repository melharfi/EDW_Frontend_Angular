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

import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllActivitiesAsync
   */
  static readonly GetAllActivitiesAsyncPath = '/api/Activities';

  /**
   * Get All Activities.
   *
   * Get names of all Activities
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllActivitiesAsync$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivitiesAsync$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Activity>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.GetAllActivitiesAsyncPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Activity>>;
      })
    );
  }

  /**
   * Get All Activities.
   *
   * Get names of all Activities
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllActivitiesAsync$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivitiesAsync$Plain(params?: {
  }): Observable<Array<Activity>> {

    return this.getAllActivitiesAsync$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Activity>>) => r.body as Array<Activity>)
    );
  }

  /**
   * Get All Activities.
   *
   * Get names of all Activities
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllActivitiesAsync$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivitiesAsync$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Activity>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.GetAllActivitiesAsyncPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Activity>>;
      })
    );
  }

  /**
   * Get All Activities.
   *
   * Get names of all Activities
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllActivitiesAsync$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllActivitiesAsync$Json(params?: {
  }): Observable<Array<Activity>> {

    return this.getAllActivitiesAsync$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Activity>>) => r.body as Array<Activity>)
    );
  }

  /**
   * Path part for operation putActivityAsync
   */
  static readonly PutActivityAsyncPath = '/api/Activities';

  /**
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putActivityAsync()` instead.
   *
   * This method doesn't expect any request body.
   */
  putActivityAsync$Response(params?: {
    id?: string;
    name?: string;
    code?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.PutActivityAsyncPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('name', params.name, {});
      rb.query('code', params.code, {});
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
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putActivityAsync$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putActivityAsync(params?: {
    id?: string;
    name?: string;
    code?: string;
  }): Observable<void> {

    return this.putActivityAsync$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postActivityAsync
   */
  static readonly PostActivityAsyncPath = '/api/Activities';

  /**
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postActivityAsync$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  postActivityAsync$Plain$Response(params?: {
    name?: string;
    code?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.PostActivityAsyncPath, 'post');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postActivityAsync$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postActivityAsync$Plain(params?: {
    name?: string;
    code?: string;
  }): Observable<string> {

    return this.postActivityAsync$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postActivityAsync$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  postActivityAsync$Json$Response(params?: {
    name?: string;
    code?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.PostActivityAsyncPath, 'post');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('code', params.code, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Post Activity.
   *
   * Post new instance of Activity
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postActivityAsync$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postActivityAsync$Json(params?: {
    name?: string;
    code?: string;
  }): Observable<string> {

    return this.postActivityAsync$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation deleteActivityAsync
   */
  static readonly DeleteActivityAsyncPath = '/api/Activities';

  /**
   * Delete Activity.
   *
   * Delete new instance of Activity
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteActivityAsync()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivityAsync$Response(params?: {
    id?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ActivitiesService.DeleteActivityAsyncPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * Delete Activity.
   *
   * Delete new instance of Activity
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteActivityAsync$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteActivityAsync(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteActivityAsync$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
