import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getProfile(){
    return this.http.get<any>('http://localhost:8080/user/' + this.authenticationService.getId())
  }

  updateProfile(request: any){
    return this.http.post<any>('http://localhost:8080/user/' + this.authenticationService.getId(), request)
  }

  deleteProfile(){
    return this.http.delete<any>('http://localhost:8080/user/' + this.authenticationService.getId())
  }
}
