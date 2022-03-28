import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DragonModel, RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate } from '../models/dragon.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  SERVER_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

  constructor(private http: HttpClient ) { }

  public getDragons(): Observable<DragonModel>{
    return this.http.get<DragonModel>(this.SERVER_URL);
  }

  public createDragon(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.SERVER_URL, request );
  }

  public getDragon(id: string): Observable<DragonModel>{
    const _url = `${this.SERVER_URL}/${id}`;

    return this.http.get<DragonModel>(_url);
  }

  public updateDragon(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.SERVER_URL}/${id}`;

    return this.http.put<ResponseUpdate>(_url, request );
  }

  public deleteDragon(id: string): Observable<any> {
    const _url = `${this.SERVER_URL}/${id}`;

    return this.http.delete<ResponseUpdate>(_url);
  }

}
