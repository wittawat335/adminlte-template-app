import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ResponseApi } from '../Interfaces/responseApi';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private apiUrl: string = environment.endpoint + 'User';

  constructor(private http: HttpClient) {}

  GetList(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.apiUrl);
  }

  Add(req: User): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.apiUrl}`, req);
  }

  Update(req: User): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}`, req);
  }

  Delete(code: string): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${code}`);
  }
}
