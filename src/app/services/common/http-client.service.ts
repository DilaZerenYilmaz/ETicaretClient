import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParams: Partial<RequestParams>): string {
    return `${requestParams.baseUrl ? requestParams.baseUrl : this.baseUrl}/${requestParams.controller}${requestParams.action ? `/${requestParams.action}` : ""}${requestParams.id ? `/${requestParams.id}` : ""}`;
  }

  get<T>(requestParams: Partial<RequestParams>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParams.fullEndPoint)
      url = requestParams.fullEndPoint;

    else
      url = `${this.url(requestParams)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url, { headers: requestParams.headers });
  }

  post<T>(requestParams: Partial<RequestParams>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParams.fullEndPoint)
      url = requestParams.fullEndPoint;

    else
      url = `${this.url(requestParams)}`;

    return this.httpClient.post<T>(url, body, { headers: requestParams.headers });
  }

  put<T>(requestParams: Partial<RequestParams>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParams.fullEndPoint)
      url = requestParams.fullEndPoint;

    else
      url = `${this.url(requestParams)}`;

    return this.httpClient.put<T>(url, body, { headers: requestParams.headers });
  }

  delete<T>(requestParams: Partial<RequestParams>, id: string): Observable<any> {
    let url: string = "";
    if (requestParams.fullEndPoint)
      url = requestParams.fullEndPoint;

    else
      url = `${this.url(requestParams)}/${id}`;

    return this.httpClient.delete<T>(url, { headers: requestParams.headers });
  }
}

export class RequestParams {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
  id?: string;
}
