import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Country} from "../../model/country";
import {UserData} from "../../model/UserData";
import {RequestOrder} from "../../model/RequestOrder";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient,
              private cook: CookieService) { }

  executeAuthentication(email,password): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signin`,{email,password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email",response.email)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          this.cook.set("email",response.email)
          this.cook.set("token",`Bearer ${response.token}`)
          return response;
        }
      )
    )
  }

  userActive(email,password): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}active`,{email,password}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  addBook(name,categoryName,author,numberOfPages,description,price,img):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}addbook`,{name,categoryName,author,numberOfPages,description,price,img}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  createUser(ssn,email,password,firstName,secondName,thirdName,fourthName,city,street,building,phone,gender,birthDate):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signup`,{ssn,email,password,firstName,secondName,thirdName,fourthName,city,street,building,phone,gender,birthDate}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  activeAccount(mail,code):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}activated`,{mail,code}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  checkEmail(email):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}checkEmail`,{email}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  resetPassword(email,code,password):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}resetPassword`,{email,code,password}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAuthentication(){
    return sessionStorage.getItem("email");
  }
  getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem('token')
    }
  }
  isLogin(){
    return !(sessionStorage.getItem('email') == null ||
           sessionStorage.getItem('token') == null);
  }
  logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    this.cook.delete('email');
    this.cook.delete('token');
  }

  getData(email): Observable<UserData>{
    return this.http.post<UserData>(`http://localhost:8080/data/userData/find`,{email}).pipe(
      map(
        response => response
      )
    )
  }

  up(ssn,email,password,firstName,secondName,thirdName,fourthName,city,street,building,phone,gender,birthDate): Observable<UserData>{
    return this.http.post<UserData>(`http://localhost:8080/data/userData/up`,{ssn,email,password,firstName,secondName,thirdName,fourthName,city,street,building,phone,gender,birthDate}).pipe(
      map(
        response => response
      )
    )
  }
  getDataOrders(id,email): Observable<RequestOrder[]>{
    return this.http.post<RequestOrder[]>("http://localhost:8080/api/request/order/",{id,email}).pipe(
      map(
        response => response
      )
    )
  }

}
