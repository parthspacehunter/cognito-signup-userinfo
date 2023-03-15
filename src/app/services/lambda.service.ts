import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../models/userInfo.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LambdaService {

  constructor(private http: HttpClient) {}

  public saveUserInfo(body: any,token:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':token
    });
    const url = environment.saveUserInfoApi;
    const requestOptions = { headers: headers };
    return this.http.post<any>(url,body,requestOptions);
  }

}
