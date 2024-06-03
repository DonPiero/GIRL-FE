import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserResponse} from "../model/UserResponse";
import {UserEditProfileRequest} from "../model/UserEditProfileRequest";
import {UserSignUpRequest} from "../model/UserSignUpRequest";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get<UserResponse>('http://localhost:8080/user/11')
  }

  updateProfile(request: UserEditProfileRequest){
    return this.http.post<any>('http://localhost:8080/user/', request)
  }

  createUser(request: UserSignUpRequest){
    return this.http.post<any>('http://localhost:8080/user/signup', request)
  }
}
