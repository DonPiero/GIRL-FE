import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { jwtDecode } from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private TOKEN_KEY = 'jwtToken';

  constructor(private http: HttpClient, private router: Router) { }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public decodeToken(): any {
    try {
      return jwtDecode(String(this.getToken()));
    } catch (Error) {
      return null;
    }
  }

  public getId() {
    const decodedToken = this.decodeToken();
    if (decodedToken && decodedToken.sub) {
      return decodedToken.id;
    }
    return null;
  }


  signin(request: any){
    return this.http.post<any>('http://localhost:8080/user/signin', request)
  }

  signup(request: any){
    return this.http.post<any>('http://localhost:8080/user/signup', request)
  }

  logout(): void {
    this.removeToken()
    this.router.navigate(['/authentication']);
  }
}

