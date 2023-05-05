import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment/environment';
import { ApiResult } from '../models/ApiResult';

export class CommonService<T> {
  uri: string;

  constructor(private _http: HttpClient, uri: string) {
    this.uri = uri;
  }

  public get http(): HttpClient {
    return this._http;
  }

  create(params: { entity: T; uri?: string }): Observable<T> {
    params.uri = params.uri ? params.uri : this.uri;
    return this.http.post<T>(`${environment.URL}${params.uri}`, params.entity);
  }

  getAll(params?: {
    page?: number;
    uri?: string;
    name?: string;
  }): Observable<ApiResult<T>> {
    const queryParams = new HttpParams();
    var uri = params ? (params.uri ? params.uri : this.uri) : this.uri;
    return this.http.get<ApiResult<T>>(`${environment.URL}${uri}`, {
      params: queryParams,
    });
  }

  delete(params: { id: number; uri?: string }): Observable<T> {
    params.uri = params.uri ? params.uri : this.uri;
    return this.http.delete<T>(`${environment.URL}${params.uri}/${params.id}`);
  }

  update(params: { id: number; entity: T; uri?: string }): Observable<T> {
    params.uri = params.uri ? params.uri : this.uri;
    return this.http.put<T>(
      `${environment.URL}${params.uri}/${params.id}`,
      params.entity
    );
  }

  patch(params: { id: number; entity: any; uri?: string }): Observable<T> {
    params.uri = params.uri ? params.uri : this.uri;
    return this.http.patch<T>(
      `${environment.URL}${params.uri}/${params.id}`,
      params.entity
    );
  }

  get(params: { id: number; uri?: string }): Observable<T> {
    params.uri = params.uri ? params.uri : this.uri;
    return this.http.get<T>(`${environment.URL}${params.uri}/${params.id}`);
  }
}
