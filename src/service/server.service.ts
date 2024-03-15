import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private _ip: any = null;

  constructor(private http: HttpClient) {
  }

  public getMyIp(): Observable<any> {
    return this.http.get('https://api64.ipify.org?format=json');
  }

  public createIpLog(data: any): Observable<any> {
    this._ip = data;
    return this.http.post('/api/ip', data);
  }

  public createInstructionsLog(): Observable<any> {
    return this.http.post('/api/instructions', this._ip);
  }
}
