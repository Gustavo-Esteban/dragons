import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DragonModel, RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate } from '../models/dragon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) { }

  public getDragons(): Observable<DragonModel> {
    return this.http.get<DragonModel>(environment.SERVER_URL);
  }

  public createDragon(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(environment.SERVER_URL, request);
  }

  public getDragon(id: string): Observable<DragonModel> {
    const _url = `${environment.SERVER_URL}/${id}`;

    return this.http.get<DragonModel>(_url);
  }

  public updateDragon(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${environment.SERVER_URL}/${id}`;

    return this.http.put<ResponseUpdate>(_url, request);
  }

  public deleteDragon(id: string): Observable<any> {
    const _url = `${environment.SERVER_URL}/${id}`;

    return this.http.delete<ResponseUpdate>(_url);
  }

}
