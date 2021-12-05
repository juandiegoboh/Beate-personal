import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: any = 'http://localhost:3000/api';
  isLoggedIn: boolean = false;
  public redirectUrl: string = "perfil";

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  login(data: any) {
    // return this.http.post(`${this.url}/login`, data).pipe(map(res => {
    //     this.isLoggedIn = true;
    //     if(this.isLoggedIn) {
    //       this.router.navigate([this.redirectUrl]);
    //     }
    //   }
    // ));
    return this.http.post(`${this.url}/login`, data)

  }

  register(data: any) {
    return this.http.post(`${this.url}/register`, data);
  }
}
