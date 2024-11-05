import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatsimService {
  private apiUrl = 'http://localhost:3000/api/vatsim/online-members'; // Cambia a la URL de tu servidor

  constructor(private http: HttpClient) {}

  getOnlineMembers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


