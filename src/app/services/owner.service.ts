import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseApi } from '../Interfaces/responseApi';
import { Observable } from 'rxjs';
import { Owner } from '../Interfaces/owner';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private apiUrl: string = environment.endpoint + 'oweners';

  constructor(private http: HttpClient) {}

  GetList(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.apiUrl);
  }

  Get(code: string) {
    return this.http.get(
      'https://localhost:7118/Customer/GetByCode?Code=' + code
    );
  }

  Add(req: Owner): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.apiUrl}`, req);
  }

  Update(req: Owner): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}`, req);
  }

  Delete(code: string): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${code}`);
  }
}
